<?php

use App\Http\Controllers\Dashboard\CategoryController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\NDController;
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

    Route::get('/', [HomeController::class, 'index'])->name('home');
    
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    
    Route::inertia('/inertia', 'Dashboard/Post/Index');

    Route::resource('/category', CategoryController::class);

    /* Quotes */

    
    Route::get('/quote', [QuoteController::class, 'index'])->name('quote');
    
    Route::post('/quote/create', [QuoteController::class, 'store'])->name('quote.store');
    
    Route::get('/quote/preview/{quoteId}', [QuoteController::class, 'preview'])->name('quote.preview');

    // Activities

    Route::get('parks', [QuoteController::class, 'parks'])->name('parks');

    Route::get('tours', [QuoteController::class, 'tours'])->name('tours');

    Route::get('hotels/{zone}', [QuoteController::class, 'hotels'])->name('hotels');
    
    Route::get('prices/{activity}/{zone}/{season}', [QuoteController::class, 'price'])->name('prices');

    // Miscelaneus
    Route::get('ND', [NDController::class, 'index'])->name('ND');
    // Miscelaneus
    Route::get('ND/Quote', [NDController::class, 'quote'])->name('NDQuote');
    Route::get('ND/Quote/activity', [NDController::class, 'activity'])->name('NDQuoteActivity');
    Route::get('ND/zones', [NDController::class, 'zones'])->name('ND.zones');
    Route::get('ND/price', [NDController::class, 'price'])->name('ND.price');
});