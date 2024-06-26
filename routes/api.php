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
Route::get('/data-pegawai/total', [PegawaiController::class, 'total'])->middleware(['auth:sanctum']);
Route::get('/data-pegawai/filter', [PegawaiController::class, 'filter'])->middleware(['auth:sanctum']);
Route::get('/data-pegawai/piechart', [PegawaiController::class, 'piechart'])->middleware(['auth:sanctum']);
Route::get('/detail-pegawai/{nrp}', [PegawaiController::class, 'show'])->middleware(['auth:sanctum']);
Route::get('/rekap-pegawai', [PegawaiController::class, 'getTotalByPangkat'])->middleware(['auth:sanctum']);
Route::post('/detail-pegawai/store', [PegawaiController::class, 'store'])->middleware(['auth:sanctum']);
Route::post('/detail-pegawai/mutasi', [PegawaiController::class, 'mutasi'])->middleware(['auth:sanctum']);
Route::post('/detail-pegawai/update', [PegawaiController::class, 'update'])->middleware(['auth:sanctum']);
Route::get('/data-mutasi', [PegawaiController::class, 'dataMutasi'])->middleware(['auth:sanctum']);
Route::get('/pegawai/export', [PegawaiController::class, 'export'])->middleware(['auth:sanctum']);
Route::post('/pegawai/delete', [PegawaiController::class, 'destroy'])->middleware(['auth:sanctum']);
Route::get('/pegawai/sinkron-rekap', [PegawaiController::class, 'synchrone'])->middleware(['auth:sanctum']);

