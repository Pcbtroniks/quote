<?php

use App\Http\Controllers\CouponController;
use App\Http\Controllers\Dashboard\CategoryController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\InvoiceController;
use App\Http\Controllers\NDController;
use App\Http\Controllers\QuoteController;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;
// DB::listen(function($query){
//     //Imprimimos la consulta ejecutada
//     echo "<pre> {$query->sql } </pre> <br>";
//   });
  
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
    
    Route::get('/dashboard', [HomeController::class, 'index'])->name('dashboard');

    
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

    // Invoices

    Route::get('invoices/', [InvoiceController::class, 'index'])->name('invoices');
    Route::post('invoices/', [InvoiceController::class, 'store'])->name('invoices.store');

    Route::get('invoice-coupons/{invoice}', [InvoiceController::class, 'invoiceCoupons'])->name('invoices.coupons');

    //Coupon 

    Route::get('coupons/code/{code}', [CouponController::class, 'searchByCode'])->name('coupon.search.code');

    // Nucleo ed diagnostico
    Route::get('ND', [NDController::class, 'index'])->name('ND');
    // Miscelaneus
    Route::get('nd/users/{user}/{team?}', [NDController::class, 'users'])->name('nd.users');
    Route::get('nd/teams', [NDController::class, 'teams'])->name('nd.teams');
    Route::get('ND/Quote', [NDController::class, 'quote'])->name('NDQuote');
    Route::get('nd/quote/uuid/{uuid}', [NDController::class, 'quoteuuid'])->name('nd.quote.uuid');
    Route::get('ND/Quote/activity', [NDController::class, 'activity'])->name('NDQuoteActivity');
    Route::get('ND/zones', [NDController::class, 'zones'])->name('ND.zones');
    Route::get('ND/price', [NDController::class, 'price'])->name('ND.price');
    Route::get('nd/pickups/{activity?}/{hotel?}', [NDController::class, 'pickups'])->name('nd.pickup.get');
    Route::get('nd/email', [NDController::class, 'newQuoteMail'])->name('nd.email');
});