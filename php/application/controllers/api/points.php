<?php

class Api_Points_Controller extends Base_Controller {

    public $restful = true;

    public function post_create()
    {
        $user = new Photo();
        $some = Input::get('some');
        $response = array('success' => true, 'id' => $some);
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