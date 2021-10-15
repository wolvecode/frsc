<?php

use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\Auth\LoginController;
use \App\Http\Controllers\UserController;
use \App\Http\Controllers\DriverController;
use Symfony\Component\HttpFoundation\Response;
use \App\Http\Controllers\OffenseController;

Route::get('/', function () {
    return redirect()->route('login');
})->name('index');

/**
 * This will be a route group protected with auth Middleware.
 * Here, We render the main Application.
 */
Route::prefix('home')->middleware('auth')->group(function () {
    Route::view('/', 'home')->name('home');
    Route::view('/scan',  'home');
    Route::view('/dashboard',  'home');

    Route::view('/register',  'home');
    Route::view('/register/upload',  'home');
    Route::view('/dashboard/criminal',  'home');
    Route::view('/fingerPrint',  'home');
    Route::view('/register/contact',  'home');
    Route::view('/home/upload/uploaded',  'home');
    Route::view('/register/scan',  'home');
    Route::view('/register/dashboard',  'home');
    Route::view('/register/info',  'home');
    Route::view('/searchMain',  'home');
    Route::view('/drivers',  'home');

    //All post request
    Route::post('/drivers', [DriverController::class, 'index']);
    Route::post('/driver/picture', [DriverController::class, 'picture']);
    Route::post('/drivers/search', [DriverController::class, 'search']);
    Route::post('/drivers/count', [DriverController::class, 'offense']);
    Route::post('/drivers/rand', [DriverController::class, 'randomDriver']);
    Route::post('/register/info', [DriverController::class, 'store'])->name('register');
    Route::post('/register/contact', [DriverController::class, 'contact'])->name('contact');
    Route::post('/register/upload', [DriverController::class, 'upload'])->name('upload');
    Route::post('/add/offense', [OffenseController::class, 'index']);

    //Offense
    Route::post('/offense', [OffenseController::class, 'index']);
    Route::post('/offense/search', [OffenseController::class, 'search']);
    Route::post('/add/offense', [OffenseController::class, 'store']);

});

Route::middleware('auth')->get('logout', function () {
    \Illuminate\Support\Facades\Auth::logout();
    return  response()->json(['message' => 'User log out successfully'], Response::HTTP_OK);
});

Route::middleware('guest')->group(function () {
    Route::view('/login', 'auth.login')->name('login');
    Route::post('/login', [LoginController::class, 'store'])->name('login');
});
