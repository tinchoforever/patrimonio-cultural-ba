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

            $message = new Message();
            $message->bid = $building->id;
            $message->text = $pointnew->tag;

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
        $data =  array();
        for ($i=0; $i < 10; $i++) {
            $data[] = array(
                "latitude"=> 45 + $i*10,
                "longitude"=> -60 + $i*3,
                "picture"=> "http://placekitten.com/200/300",
                "tags" => "nices push bro");
        }
        $result = array($data);
        return Response::json($result);
    }

}