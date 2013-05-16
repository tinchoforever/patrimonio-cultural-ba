<?php

class Api_Points_Controller extends Base_Controller {

    public $restful = true;

    public function post_create()
    {
        $uploaddir = path('public') . 'img/photos/';


        $building = new Building();
        $building->lat = $_POST['latitude'];
        $building->lng == $_POST['longitude'];
        $building->save();

        $photo = new Photo();
        $photo->bid = $building->id;
        $file = uniqid() . '.png';
        // $success = file_put_contents($uploaddir . $file, $data);
        // $file_name = $_FILES['image']['name'];
        $file_tmp = $_FILES['image']['tmp_name'];
        // $val = $_POST['latitude'];
        $success = move_uploaded_file($file_tmp,$uploaddir . $file );

        if ($success) {
            $photo->file = $file;
            $photo->save();

            $message = new Message();
            $message->bid = $building->id;
            $message->text = $_POST['tag'];
            $message->save();

            $response = array(
                'success' => true,
                'id' => $building->id
            );
        } else {
            $response = array(
                'success' => false,
                'error' => 'Couldn\'t upload image.'
            );
        }

        return Response::json($response);
    }

    public function get_all()
    {
        $data = array();

        // if ($ll = Input::get('ll')) {
        //     $ll = explode(',', $ll);
        //     // Latitude: 1 deg = 110.54 km
        //     // Longitude: 1 deg = 111.320*cos(latitude) km
        //     $oneKMDiffLat = 1 / 110.54;
        //     $oneKMDiffLng = 1 / (111.32 * cos($ll[0]));
        //     $minLat = $ll[0] - $oneKMDiffLat;
        //     $maxLat = $ll[0] + $oneKMDiffLat;
        //     $minLng = $ll[1] - $oneKMDiffLng;
        //     $maxLng = $ll[1] + $oneKMDiffLng;
        //     $buildings = Building::where_between('lat', $minLat, $maxLat)->where_between('lng', $minLng, $maxLng)->get();
        // } else {
        $buildings = Building::order_by('id', 'desc')->get();
        // }

        foreach ($buildings as $building) {
            // $photos = $building->photos()->get();
            // if (count($photos)) {
            //     $photo = $photos[0]->file;
            //     $photoUrl = (strpos($photo, 'http:') !== false) ? $photo : url('/../img/photos/' . $photo);
            //     $messages = $building->messages()->get();
            //     $message = $messages[0]->text;


            // }

             $data[] = array(
                    'latitude' => $building->lat,
                    'longitude' => $building->lng,
                    'tags' => $building->category,
                    'name' => $building->name,
                    'picture' => $building->photo
                );
        }

        return Response::json($data);
    }

}