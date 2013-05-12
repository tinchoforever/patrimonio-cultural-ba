<?php

//'redirectUrl':  'http://localhost:3030/callback'

session_start();
require_once('FoursquareAPI.class.php');

//$_SESSION['token'] = null;
$foursquare = new FoursquareAPI('GOJXU43XWNQME2YCUOLNG5HR2ESRUJSLHXBRGC5I4PHYVAO2', '0K1IFL1DNDG45IVCNE5LKL2JUNHFBPVJL0E00I0L35CUG5HH');
$redirect_uri = 'http://desktop.dev/gcba/4sq/';

if (array_key_exists('code', $_GET) && !isset($_SESSION['token'])) {
    $_SESSION['token'] = $foursquare->GetToken($_GET['code'], $redirect_uri);
}

if (!isset($_SESSION['token'])) {
    echo '<a href="' . $foursquare->AuthenticationLink($redirect_uri) . '">Connect</a>';
} else {
    $foursquare->SetAccessToken($_SESSION['token']);

    $photoFile = "photos.txt";
    $fh = fopen($photoFile, 'w') or die("can't open file");

    try{
        /*
        $limit = 2;
        $offset = 0;
        for ($i=0; $i < 25; $i++) { 
            if($i>0){
                $offset +=2;
            }

            getPhotos($foursquare, $fh, $offset);
        }
        */
        getPhotos($foursquare, $fh);
    }
    catch(Exception $e){
      echo 'Caught exception: ',  $e->getMessage(), "\n";
    }

    fclose($fh);
}

function getPhotos($foursquare, $fh){
    $response = $foursquare->GetPrivate('/venues/search', array(
        'll' => '-34.58514,-58.38922',
        'categoryId' => '4bf58dd8d48988d12d941735',
        'intent' => 'browse',
        'radius' => '10000'
        //'limit' => 2,
        //'offset' => $offset
    ));

    $response = json_decode($response);
    // output the value as a variable by setting the 2nd parameter to true
    //$results = print_r($response, true);
    //fwrite($fh, $results."\r\n");
    //return;

    if($response->meta->code == 403)
        return;

    try{
        $venues = $response->response->venues;

        $names = array();
        $requests = array();
        foreach ($venues as $i => $venue) {
            $text = "insert into fsq (name, lat lng, category, photo) values (";
            $text .= "'" . $venue->name . "', ";
            $text .= "'" . $venue->location->lat . ", ";
            $text .= "'" . $venue->location->lng . "'', ";

            $categories = (array)$venue->categories;
            $cats = "";
            if(!empty($categories)){
                $cat = $categories[0];
                $cats .= $cat->shortName . ", ";         
            }

            $text .= "'" . $cats ."',";

            /*
            $requests[] = array(
                'endpoint' => 'venues/' . $venue->id . '/photos',
                'group' => 'venue'
            );
            $names[$venue->id] = array(
                'name' => $venue->name,
                'photos' => array()
            );*/

            $response = $foursquare->GetPrivate('venues/' . $venue->id . '/photos', array('group'=>'venue'));
            $json  = json_decode($response);

            if(isset($json->response) && !empty($json->response)){
                if(!isset($json->response->photos))
                    continue;

                $photos = $json->response->photos;
                $items = $photos->items;

                foreach ($items as $i => $item) {
                    fwrite($fh, $text . " '" . $item->url . "');\n");
                }
            }
        }

    }
    catch(Exception $e){
        echo 'Caught exception: ',  $e->getMessage(), "\n";
    }
    

    /*
    $photos = $foursquare->GetMulti($requests);

    $json = json_decode($photos);

    $responses = $json->response->responses;

    foreach ($responses as $response) {
        $items = $response->response->photos->items;

        foreach ($items as $photo) {
            fwrite($fh, $text . $photo->url . "\n");
        }
    }*/
}