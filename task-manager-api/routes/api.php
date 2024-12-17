<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TaskController;

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

// Ruta básica de prueba
Route::get('/ping', function () {
    return response()->json(['message' => 'API is working!']);
});

// CRUD para tareas usando TaskController
Route::apiResource('tasks', TaskController::class);
