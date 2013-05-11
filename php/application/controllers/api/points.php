<?php

class Api_Points_Controller extends Base_Controller {

  public $restful = true;



  public function post_create()
  {
   $response =  array('success' => true, 'id' =>1);
   return Response::json($response);
 }

 public function get_all(){


  $result = array('data' => array());

  return Response::json($result);

}



}