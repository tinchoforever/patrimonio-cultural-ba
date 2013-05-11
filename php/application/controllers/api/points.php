<?php

class Api_Points_Controller extends Base_Controller {

    public $restful = true;

    public function post_create()
    {
        $uploaddir = path('public') . 'img/photos/';

        $building = new Building();
        $building->lat = Input::get('latitude');
        $building->lng = Input::get('longitude');
        $building->save();

        $photo = new Photo();
        $photo->bid = $building->id;
        $file64 = Input::get('photo');
        $img = str_replace('data:image/png;base64,', '', $file64);
        $img = str_replace(' ', '+', $img);
        $data = base64_decode($img);
        $file = uniqid() . '.png';
        $success = file_put_contents($uploaddir . $file, $data);

        if ($success) {
            $photo->file = $file;

            $message = new Message();
            $message->bid = $building->id;
            $message->text = Input::get('tag');

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
        $result = array('data' => array());
        return Response::json($result);
    }

}