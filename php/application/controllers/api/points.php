<?php

class Api_Points_Controller extends Base_Controller {

    public $restful = true;

    public function post_create()
    {
        $uploaddir = path('public') . 'img/photos/';
        $building = new Building();
        $building->lat = $_POST['latitude'];
        $building->lng = $_POST['longitude'];

        $building->save();

        $photo = new Photo();
        $photo->bid = $building->id;
        $file = uniqid() . '.png';
        $file_tmp = $_FILES['image']['tmp_name'];
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
    public function get_take($count){
        $data = Api_Points_Controller::getBuildings($count);
        return Response::json($data);
    }

    public function get_allgeolocated()
    {
        $data = array();

        if ($ll = Input::get('ll')) {
            $ll = explode(',', $ll);
            $data = Api_Points_Controller::getBuildingsByGeo($ll[0], $ll[1]);
        } else {
           $data = Api_Points_Controller::getBuildings();
        }
        return Response::json($data);
    }

    //TODO: MOVE TO SERVICE
    public function getBuildingsByGeo($lat,$lon, $count=20){
        // Latitude: 1 deg = 110.54 km
        // Longitude: 1 deg = 111.320*cos(latitude) km
        $oneKMDiffLat = 1 / 110.54;
        $oneKMDiffLng = 1 / (111.32 * cos($lat));
        $minLat = $lat - $oneKMDiffLat;
        $maxLat = $lat + $oneKMDiffLat;
        $minLng = $lon - $oneKMDiffLng;
        $maxLng = $lon + $oneKMDiffLng;

        $buildings = Building::where_between('lat', $minLat, $maxLat)
            ->where_between('lng', $minLng, $maxLng)
            ->order_by('id', 'desc')
            ->take($count)
            ->get();

        return Api_Points_Controller::processBuildings($buildings);

    }
     //TODO: MOVE TO SERVICE

    public function getBuildings($count=50){

        $buildings =  Building::where('lat', '<>', 1)
                ->where('lng', '<>', 1)
                ->where('lat', '<>', "")
                ->where('lng', '<>', "")
                ->order_by('id', 'desc')
                ->take($count)
                ->get();
        return Api_Points_Controller::processBuildings($buildings);

    }
    public function processBuildings($buildings){

       $data = array();
         foreach ($buildings as $building) {
            $photos = $building->photos()->get();
            $messages = $building->messages()->get();
            $photoUrl = "";
            $message = "";
            if (count($photos)) {
                $photo = $photos[0]->file;
                $photoUrl = (strpos($photo, 'http:') !== false) ? $photo : url('/../img/photos/' . $photo);
            }
            if (count($messages)){
                $message = $messages[0]->text;
            }

            $data[] = array(
                'latitude' => $building->lat,
                'longitude' => $building->lng,
                'category' => $building->category,
                'tags' =>$message,
                'name' => $building->name,
                'photo' => ($photoUrl != "" ? $photoUrl : $building->photo )
            );
        }
        return $data;

    }

}