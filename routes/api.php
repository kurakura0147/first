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

Route::post('/register', 'Auth\RegisterController@register')->name('register');

Route::post('/login', 'Auth\LoginController@login')->name('login');

Route::post('/logout', 'Auth\LoginController@logout')->name('logout');

Route::get('/user', fn() => Auth::user())->name('user');

// 記事一覧
Route::get('/books', 'BookController@index')->name('book.index');
// 記事投稿
Route::post('/books/create', 'BookController@create')->name('book.create');

// Route::group(['middleware' => 'api'], function() {
//   Route::get('/book', 'BookController@index');
// });