<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\PegawaiController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/logout', [AuthController::class, 'logout'])->middleware(['auth:sanctum']);;
Route::post('/signup', [AuthController::class, 'signup']);
Route::post('/login', [AuthController::class, 'login']);
Route::get('/me', [AuthController::class, 'me'])->middleware(['auth:sanctum']);
Route::get('/data-pegawai', [PegawaiController::class, 'index'])->middleware(['auth:sanctum']);

