<?php

use App\Http\Controllers\ActivitiesController;
use App\Http\Controllers\CouponController;
use App\Http\Controllers\Dashboard\CategoryController;
use App\Http\Controllers\ExportController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\Hotels\HotelController;
use App\Http\Controllers\InvoiceController;
use App\Http\Controllers\NDController;
use App\Http\Controllers\Pickups\PickupController;
use App\Http\Controllers\Prices\PricesController;
use App\Http\Controllers\ProviderController;
use App\Http\Controllers\Qr\QRController;
use App\Http\Controllers\QuoteController;
use App\Http\Controllers\QuoterController;
use App\Http\Controllers\Team\CurrentTeamController;
use FontLib\Table\Type\name;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\DB;
// DB::listen(function($query){
//     Imprimir la consulta ejecutada
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
    'check.current.team',
])->group(function () {

    Route::get('/', [HomeController::class, 'index'])->name('home');

    Route::get('/dashboard', [HomeController::class, 'index'])->name('dashboard');


    Route::inertia('/inertia', 'Dashboard/Post/Index');

    Route::resource('/category', CategoryController::class);

    /* Quotes */


    Route::get('/quote', [QuoteController::class, 'index'])->name('quote');

    Route::post('/quote/create', [QuoteController::class, 'store'])->name('quote.store');

    Route::get('/quote/preview/{quoteId}', [QuoteController::class, 'preview'])->name('quote.preview');

    Route::get('/quotes/filter', [HomeController::class, 'filter'])->name('quotes.filter');

    /* Quoter */

    Route::get('/quoter/create', [QuoterController::class, 'create'])->name('quote.create');

    Route::get('/quoter/nd/', [QuoterController::class, 'nd'])->name('quote.nd');

    Route::get('/quoter/calculate/', [QuoterController::class, 'calculateCost'])->name('quoter.calculate');

    Route::post('/quoter/create', [QuoterController::class, 'store'])->name('quoter.store');

    // Activities

    Route::get('/activities', [ActivitiesController::class, 'index'])->name('activities');

    Route::post('/activities/create', [ActivitiesController::class, 'store'])->name('activities.store');

    Route::post('/activities/{id}', [ActivitiesController::class, 'update'])->name('activities.update');

    Route::get('parks', [QuoteController::class, 'parks'])->name('parks');

    Route::get('tours', [QuoteController::class, 'tours'])->name('tours');

    Route::get('hotels/{zone}', [QuoteController::class, 'hotels'])->name('hotels');

    Route::get('prices/{activity}/{zone}/{season}', [QuoteController::class, 'price'])->name('prices');

    // From Create activity page Prices
    Route::get('/activity/create/{activity?}', [ActivitiesController::class, 'create'])->name('activity.create');

    Route::get('/activity/search', [ActivitiesController::class, 'search'])->name('activity.search');

    Route::post('activity/store', [ActivitiesController::class, 'store'])->name('activity.store');

    Route::post('activity/update', [ActivitiesController::class, 'onlyActivityUpdate'])->name('activity.update');

    Route::post('activity/price/upsert', [PricesController::class, 'upsert'])->name('activity.price.upsert');

    Route::post('activity/costs/upsert', [PricesController::class, 'upsertCosts'])->name('activity.costs.upsert');

    // Hotels

    Route::post('hotels/json/', [HotelController::class, 'jsonStore'])->name('hotels.json.store');

    // Pickups

    Route::get('pickups/create', [PickupController::class, 'create'])->name('pickups.create');
    Route::get('pickups/byhotel/{hotel?}', [PickupController::class, 'byHotel'])->name('pickups.by.hotel');
    Route::get('pickups/byzone/{zone?}/{activity?}', [PickupController::class, 'byZone'])->name('pickups.by.zone');
    Route::get('pickups/{zone}/{activity}', [PickupController::class, 'index'])->name('pickups');
    Route::post('pickups/store', [PickupController::class, 'store'])->name('pickups.store');
    Route::post('pickups/{pickup}', [PickupController::class, 'update'])->name('pickups.update');
    Route::post('pickups/update-multiple/{pickup}', [PickupController::class, 'updateMultiple'])->name('pickups.update.multiple');

    // Invoices

    Route::get('invoices/', [InvoiceController::class, 'index'])->name('invoices');
    Route::post('invoices/', [InvoiceController::class, 'store'])->name('invoices.store');

    Route::get('invoice-coupons/{invoice}', [InvoiceController::class, 'invoiceCoupons'])->name('invoices.coupons');
    Route::post('invoice-coupons/sync/invoice', [InvoiceController::class, 'syncCoupon'])->name('invoices.sync.coupon');
    Route::post('invoice-coupons/unsync/invoice', [InvoiceController::class, 'unSyncCoupon'])->name('invoices.unsync.coupon');

    // Providers

    Route::get('providers/', [ProviderController::class, 'index'])->name('providers');
    Route::post('providers/', [ProviderController::class, 'store'])->name('providers.store');
    Route::post('providers/{providerID}/status/switch', [ProviderController::class, 'switch'])->name('providers.switch.status');
    Route::delete('providers/{providerID}/delete/', [ProviderController::class, 'delete'])->name('providers.delete');

    //Coupon

    Route::get('coupons/code/{code}', [CouponController::class, 'searchByCode'])->name('coupon.search.code');
    Route::post('coupons/{coupon}/confirm/', [CouponController::class, 'keyConfirm'])->name('coupon.key.confirm');
    Route::post('coupons/{quote}/get-code', [CouponController::class, 'getCode'])->name('coupon.get.code');
    Route::post('coupons/{quote}/get-coupon', [CouponController::class, 'getCoupon'])->name('coupon.get.coupon');
    Route::post('coupons/{coupon}/confirm-coupon', [CouponController::class, 'confirmCoupon'])->name('coupon.confirm');
    Route::post('coupons/{quote}/request-code', [CouponController::class, 'requestCode'])->name('coupon.request.code');
    Route::post('coupons/{coupon}/send-by-email', [CouponController::class, 'sendByEmail'])->name('coupon.send.by.email');
    /**
     * Preview coupon without restrictions
     */
    Route::get('/coupon/preview/{quoteID}', [CouponController::class, 'preview'])->name('coupon.preview')->withoutMiddleware(['auth','auth:sanctum','verified', \App\Http\Middleware\CheckCurrentTeam::class]);

    // Exports 

    Route::get('exports/manifest/{invoiceID}', [ExportController::class, 'exportManifest'])->name('exports.manifest.byInvoiceId');
    Route::get('exports/view/manifest/{invoiceID}', [ExportController::class, 'viewManifest'])->name('exports.view.manifest.byInvoiceId');

    // Quote
    Route::get('export/pdf/proform/quote/{quote?}', [ExportController::class, 'exportPDFProformQuote'])->name('export.pdf.proform.quote');

    // QR
    Route::get('qr/example/{text?}', [QRController::class, 'example'])->name('qr.example');

    // Nucleo de diagnostico
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

Route::put('team/switch', [CurrentTeamController::class, 'update'])->name('team.current.switch')->withoutMiddleware([\App\Http\Middleware\CheckCurrentTeam::class]);