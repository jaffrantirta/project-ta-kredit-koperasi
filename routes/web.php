<?php

use App\Http\Controllers\CriteriaController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\CustomerCreditAssignWeightController;
use App\Http\Controllers\CustomerCreditController;
use App\Http\Controllers\CustomerCreditEvaluateAlternativeController;
use App\Http\Controllers\CustomerCreditNormalizationController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\StatusController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
 * |--------------------------------------------------------------------------
 * | Web Routes
 * |--------------------------------------------------------------------------
 * |
 * | Here is where you can register web routes for your application. These
 * | routes are loaded by the RouteServiceProvider within a group which
 * | contains the "web" middleware group. Now create something great!
 * |
 */

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::post('/report', [ProfileController::class, 'edit'])->name('report');

    Route::post('/normalization-summary', [CustomerCreditNormalizationController::class, 'summary'])->name('normalization.summary');
    Route::post('/evaluate-alternative-summary', [CustomerCreditEvaluateAlternativeController::class, 'summary'])->name('evaluate-alternative.summary');

    Route::resource('customer', CustomerController::class);
    Route::resource('credit', CustomerCreditController::class);
    Route::resource('assign-weight', CustomerCreditAssignWeightController::class);
    Route::resource('normalization', CustomerCreditNormalizationController::class);
    Route::resource('evaluate-alternative', CustomerCreditEvaluateAlternativeController::class);
    Route::resource('status', StatusController::class);
    Route::resource('criteria', CriteriaController::class);
});

require __DIR__ . '/auth.php';
