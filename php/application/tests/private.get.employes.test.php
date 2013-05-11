// <?php

// class TestPrivateFetchEmployes extends PHPUnit_Framework_TestCase {



//     public $from = null;
//     public $to = null;
//     public $device = null;

// 	/**
// 	 * Test that a given condition is met.
// 	 *
// 	 * @return void
// 	 */
// 	public function must_get_employes()
// 	{
//      $url = "http://phonelist-dev/directory";
//      $ch = curl_init($url);
//      curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
//      curl_setopt($ch, CURLOPT_BINARYTRANSFER, true);
//      curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
//      $output = curl_exec($ch);
//      curl_close($ch);
//      $this->assertNotNull($output);
//      $db = json_decode($output);

//      $users = array();

//      $regions = array();
//      $office = array();
//      $levels = array();

//      foreach ($db->Regions as $key => $value) {
//         $regions[] = $value;
//     }

//     foreach ($db->Levels as $key => $value) {
//         $levels[] = $value;
//     }
//     foreach ($db->Employees as $key => $value) {
//         //Removing offiste pepople
//         try {
//             if($value->RegionId != 7 && !empty($value->Email)){
//                $user = new User(array(
//                 'username' =>   str_replace("z","", $value->Email) ,
//                 'fullname' =>   $value->FName . ' ' .$value->LName,
//                 'region'=>  $regions[$value->RegionId]->Name,
//                 'phone' => $value->Phone
//                 ));
//                if ($value->BldLevelId > -1){
//                 $user->office = $levels[$value->BldLevelId]->Name;
//             }
//             $user->save();
//             $users[] = $user;

//         }
//     } catch (Exception $e) {}

// }

// }



// }