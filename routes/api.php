<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('v1', 'RecordController@index'); // all records
Route::post('v1/request', 'RecordController@store');// store record
Route::get('v1/{id}/edit', 'RecordController@edit'); // edit record
Route::match(['put','patch'],'v1/{id}', 'RecordController@update');// update record
Route::delete('v1/{id}', 'RecordController@destroy');// delete record

//Route::get('/records', 'RecordController@index');
//Route::get('/records/{id}', 'RecordController@show');
//Route::post('/records/new', 'RecordController@store');