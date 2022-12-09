<?php

namespace App\Repositories\Exports;

use App\Models\Invoice;
use App\Models\Quote as QuoteModel;
use App\Repositories\Quotes\Quote;
use Illuminate\Support\Facades\DB;

class Manifest {

    public static function getManifestByInvoice(int $invoice = 1)
    {
        return Invoice::with(['coupons', 'coupons.quote', 'coupons.quote.user', 'coupons.quote.listed_activities','coupons.quote.listed_activities.activity','coupons.quote.listed_activities.hotel'])
                    ->where('id', $invoice)
                    ->first();
    }

    public static function getManifestByInvoice_()
    {
        return DB::table('quotes as q')
                ->join('coupons as c', 'c.id', '=', 'q.coupon_id' )
                ->where('c.invoice_id', 1)
                ->get();
    }

}