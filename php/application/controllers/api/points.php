<?php

class Api_Points_Controller extends Base_Controller {

    public $restful = true;

    public function post_create()
    {
        $uploaddir = path('public') . 'img/photos/';

        $pointnew = Input::json();
        $building = new Building();
        $building->lat = $pointnew->latitude;
        $building->lng = $pointnew->longitude;
        $building->save();

        $photo = new Photo();
        $photo->bid = $building->id;
        $file64 = $pointnew->photo;
        $img = str_replace('data:image/png;base64,', '', $file64);
        $img = str_replace(' ', '+', $img);
        $data = base64_decode($img);
        $file = uniqid() . '.png';
        $success = file_put_contents($uploaddir . $file, $data);

        if ($success) {
            $photo->file = $file;
            $photo->save();

            $message = new Message();
            $message->bid = $building->id;
            $message->text = $pointnew->tag;
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

        if ($ll = Input::get('ll')) {
            $ll = explode(',', $ll);
            // Latitude: 1 deg = 110.54 km
            // Longitude: 1 deg = 111.320*cos(latitude) km
            $oneKMDiffLat = 1 / 110.54;
            $oneKMDiffLng = 1 / (111.32 * cos($ll[0]));
            $minLat = $ll[0] - $oneKMDiffLat;
            $maxLat = $ll[0] + $oneKMDiffLat;
            $minLng = $ll[1] - $oneKMDiffLng;
            $maxLng = $ll[1] + $oneKMDiffLng;
            $buildings = Building::where_between('lat', $minLat, $maxLat)->where_between('lng', $minLng, $maxLng)->get();
        } else {
            $buildings = Building::all();
        }

        foreach ($buildings as $building) {
            $photos = $building->photos()->get();
            if (count($photos)) {
                $photo = $photos[0]->file;
                $photoUrl = (strpos($photo, 'http:') !== false) ? $photo : url('/../img/photos/' . $photo);
                $messages = $building->messages()->get();
                $message = $messages[0]->text;

                $data[] = array(
                    'latitude' => $building->lat,
                    'longitude' => $building->lng,
                    'tags' => $message,
                    'picture' => $photoUrl
                );
            }
        }

        return Response::json($data);
    }

}