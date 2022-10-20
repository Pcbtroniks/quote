<?php

use App\Http\Controllers\Dashboard\CategoryController;
use App\Http\Controllers\Dashboard\PostController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\QuoteController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/* Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
}); */

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    
    Route::inertia('/inertia', 'Dashboard/Post/Index');

    Route::get('/', [HomeController::class, 'index'])->name('home');

    Route::resource('/category', CategoryController::class);

    /* Quotes */

    
    Route::get('/quote/create', [QuoteController::class, 'index'])->name('quote');
    
    Route::post('/quote/create', [QuoteController::class, 'store'])->name('quote.store');
    
    Route::get('/quote/preview', [QuoteController::class, 'show'])->name('quote.preview');
});