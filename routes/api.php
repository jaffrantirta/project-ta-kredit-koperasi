<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::apiResource('customer', CustomerController::class);
// Route::apiResource('customercredit', CustomerCreditController::class);
// Route::apiResource('status', StatusController::class);
// Route::apiResource('criteria', CriteriaController::class);
// Route::apiResource('customercreditassignweight', CustomerCreditAssignWeightController::class);
// Route::apiResource('customercreditnormalization', CustomerCreditNormalizationController::class);
// Route::apiResource('customercreditevaluatealternative', CustomerCreditEvaluateAlternativeController::class);