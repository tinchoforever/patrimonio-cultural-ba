<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Simply tell Laravel the HTTP verbs and URIs it should respond to. It is a
| breeze to setup your application using Laravel's RESTful routing and it
| is perfectly suited for building large applications and simple APIs.
|
| Let's respond to a simple GET request to http://example.com/hello:
|
|		Route::get('hello', function()
|		{
|			return 'Hello World!';
|		});
|
| You can even respond to more than one URI:
|
|		Route::post(array('hello', 'world'), function()
|		{
|			return 'Hello World!';
|		});
|
| It's easy to allow URI wildcards using (:num) or (:any):
|
|		Route::put('hello/(:any)', function($name)
|		{
|			return "Welcome, $name.";
|		});
|
*/
Route::controller(Controller::detect());
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers "Origin, X-Requested-With, Content-Type, Accept"');

Route::get('/', array('as' => 'home', 'uses' => 'home@index'));

Route::get('api/v1/points/all', array('as' => 'api.points', 'uses' => 'api.points@all'));
Route::get('api/v1/points/take/(:any?)', array('as' => 'api.points', 'uses' => 'api.points@take'));
Route::get('api/v1/points/geo/all', array('as' => 'api.points', 'uses' => 'api.points@allgeolocated'));
Route::get('api/v1/points/search/(:any?)', array('as' => 'api.points', 'uses' => 'api.points@allsearch'));
Route::any('api/v1/points/create/(:any?)', array('as' => 'api.points', 'uses' => 'api.points@create'));
Route::any('api/v1/points/upload/(:any?)', array('as' => 'api.points', 'uses' => 'api.points@upload'));


/*
|--------------------------------------------------------------------------
| Application 404 & 500 Error Handlers
|--------------------------------------------------------------------------
|
| To centralize and simplify 404 handling, Laravel uses an awesome event
| system to retrieve the response. Feel free to modify this function to
| your tastes and the needs of your application.
|
| Similarly, we use an event to handle the display of 500 level errors
| within the application. These errors are fired when there is an
| uncaught exception thrown in the application. The exception object
| that is captured during execution is then passed to the 500 listener.
|
*/

Event::listen('404', function()
{
	return Response::error('404');
});

Event::listen('500', function($exception)
{
	return Response::error('500');
});

/*
|--------------------------------------------------------------------------
| Route Filters
|--------------------------------------------------------------------------
|
| Filters provide a convenient method for attaching functionality to your
| routes. The built-in before and after filters are called before and
| after every request to your application, and you may even create
| other filters that can be attached to individual routes.
|
| Let's walk through an example...
|
| First, define a filter:
|
|		Route::filter('filter', function()
|		{
|			return 'Filtered!';
|		});
|
| Next, attach the filter to a route:
|
|		Route::get('/', array('before' => 'filter', function()
|		{
|			return 'Hello World!';
|		}));
|
*/

Route::filter('before', function()
{
	// Do stuff before every request to your application...
});

Route::filter('after', function($response)
{


});

Route::filter('csrf', function()
{
	$response->header('Access-Control-Allow-Origin', '*');
});

Route::filter('auth', function()
{
	if (Auth::guest()) return Redirect::to('login');
});