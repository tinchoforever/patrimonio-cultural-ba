<?php

//'redirectUrl':  'http://localhost:3030/callback'

session_start();
require_once('FoursquareAPI.class.php');

$foursquare = new FoursquareAPI('GOJXU43XWNQME2YCUOLNG5HR2ESRUJSLHXBRGC5I4PHYVAO2', '0K1IFL1DNDG45IVCNE5LKL2JUNHFBPVJL0E00I0L35CUG5HH');
$redirect_uri = 'http://desktop.dev/gcba/4sq/';

if (array_key_exists('code', $_GET) && !isset($_SESSION['token'])) {
    $_SESSION['token'] = $foursquare->GetToken($_GET['code'], $redirect_uri);
}

if (!isset($_SESSION['token'])) {
    echo '<a href="' . $foursquare->AuthenticationLink($redirect_uri) . '">Connect</a>';
} else {
    $foursquare->SetAccessToken($_SESSION['token']);

    $response = $foursquare->GetPrivate('/venues/search', array(
        'll' => '-34.58514,-58.38922',
        'categoryId' => '4bf58dd8d48988d12d941735',
        'limit' => '2'
    ));
    $response = json_decode($response);
    // var_dump($response);
    $venues = $response->response->venues;

    $names = array();
    $requests = array();
    foreach ($venues as $i => $venue) {
        $requests[] = array(
            'endpoint' => 'venues/' . $venue->id . '/photos',
            'group' => 'venue'
        );
        $names[$venue->id] = array(
            'name' => $venue->name,
            'photos' => array()
        );
    }
    // var_dump($requests);
    $photos = $foursquare->GetMulti($requests);
    var_dump($photos);

    // echo json_encode(array('data' => $names));
}