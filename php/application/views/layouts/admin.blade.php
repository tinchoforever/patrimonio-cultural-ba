<!DOCTYPE html>
<html xmlns:ng="http://angularjs.org">
<head>
  <!--[if lte IE 8]>
  <script>
    document.createElement('ng-include');
    document.createElement('ng-pluralize');
    document.createElement('ng-view');
    document.createElement('ng:include');
    document.createElement('ng:pluralize');
    document.createElement('ng:view');
  </script>
  <![endif]-->

  <meta http-equiv="content-type" content="text/html; charset=UTF-8">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <title></title>
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width">
  <script src="js/frameworks/zepto.min.js"></script>

  <script src="http://maps.googleapis.com/maps/api/js?sensor=false&amp;language=en"></script>
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>

  <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->
  <link rel="stylesheet" href="css/frameworks/gumby.css">
  <link rel="stylesheet" href="css/base.css">
  <link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.5.1/leaflet.css" />



</head>
<body ng-app="App">
  <div class="metro navbar" gumby-fixed="top" id="nav3">
    <div class="row">
      <a class="toggle" gumby-trigger="#nav3 &gt; .row &gt; ul" href="#"><i class="icon-menu"></i></a>
      <h1 class="four columns logo">
        <a href="#">
          <h3>MapArt</h3>
        </a>
      </h1>
      <ul class="eight columns">
        <li><a href="#/">Descubri</a></li>
        <li><a href="#/gallery">Galer&iacute;a</a></li>
      </ul>
    </div>
  </div>
  <!-- Add your site or application content here -->
  <div class="container">
    @yield('content')
  </div>


  <!-- build:js scripts/scripts.js -->

  <script src="js/frameworks/angular.min.js"></script>
  <script src="js/frameworks/angular-resource.js"></script>
  <script src="js/frameworks/angular-google-maps.js"></script>

  <script src="js/libs/moment.min.js"></script>
  <script src="js/libs/modernizr-2.0.6.min.js"></script>
  <script src="js/libs/gumby.min.js"></script>

  <script src="js/controllers/main.js"></script>
  <script src="js/controllers/list.js"></script>
  <script src="js/services/libs/localStorage.js"></script>
  <script src="js/services/logic/points.js"></script>

  <script src="js/app.js"></script>

  <script src="http://cdn.leafletjs.com/leaflet-0.5.1/leaflet.js"></script>
  <script src="http://code.jquery.com/jquery-1.9.0.min.js"></script>
  <script async src="//platform.vine.co/static/scripts/embed.js" charset="utf-8"></script>


  <!-- endbuild -->
</body>
</html>
