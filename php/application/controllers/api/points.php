<?php



// Cloud name:
// Base URL: http://res.cloudinary.com/gcba-r-ga ▼
// Secure URL: https://cloudinary-a.akamaihd.net/gcba-r-ga ▼
// API Base URL: http://api.cloudinary.com/v1_1/gcba-r-ga ▼
// API Key:
// API Secret:
// Environment variable:

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

       Cloudinary::config(array(
            "cloud_name" => Config::get('cloudinary.cloud_name'),
            "api_key" => Config::get('cloudinary.api_key'),
            "api_secret" => Config::get('cloudinary.api_secret'),
        ));
        $result = Uploader::upload($file_tmp);

        //$success = move_uploaded_file($file_tmp,$uploaddir . $file );

        if ($result) {
            $photo->file = $result["url"];
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
    public function get_allsearch()
    {
        $data = array();
        $q = Input::get('q');
         if ($q) {
            $data = Api_Points_Controller::searchBuildings($q);
        }
        return Response::json($data);
    }

    //TODO: MOVE TO SERVICE
    public function getBuildingsByGeo($lat,$lon, $count=1000){
        // Latitude: 1 deg = 110.54 km
        // Longitude: 1 deg = 111.320*cos(latitude) km
        $oneKMDiffLat = 1 / 1000.54;
        $oneKMDiffLng = 1 / (1000.32 * cos($lat));
        $minLat = $lat - $oneKMDiffLat;
        $maxLat = $lat + $oneKMDiffLat;
        $minLng = $lon + $oneKMDiffLng;
        $maxLng = $lon - $oneKMDiffLng;



        $buildings = Building::where_between('lat', $minLat, $maxLat)
            ->where_between('lng', $minLng, $maxLng)
            ->order_by('id', 'desc')
            ->take($count)
            ->get();

        return Api_Points_Controller::processBuildings($buildings);

    }
     //TODO: MOVE TO SERVICE

    public function getBuildings($count=50){

        $buildings =  Building::
                // where('lat', '<>', 1)
                // ->where('lng', '<>', 1)
                //->
                where('lat', '<>', "")
                ->where('lng', '<>', "")
                ->order_by('id', 'desc')
                ->take($count)
                ->get();
        return Api_Points_Controller::processBuildings($buildings);

    }

    public function searchBuildings($key,$count=100){
        $key = '%'.$key.'%';
        $query = Building::with(array('messages'))
                // ->or_where('messages.text','like', $key)
                ->or_where('name', 'like', $key)
                ->or_where('category', 'like', $key)
                ->where('lng', '<>', 1)
                ->where('lat', '<>', "")
                ->where('lng', '<>', "")
                ->order_by('id', 'desc')
                ->take($count);

        $buildings = $query->get();
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
                'author' => 'GCBA',
                'latitude' => $building->lat,
                'longitude' => $building->lng,
                'category' => $building->category,
                'tags' =>$message,
                'name' => $building->name,
                'photo' => ($photoUrl != "" ? $photoUrl : $building->photo ),
                'date' => $building->created_at
            );
        }
        return $data;

    }

}