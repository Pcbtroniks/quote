<?php

namespace App\Http\Controllers\Prices;

use App\Repositories\Prices\PostPrices;
use App\Services\Price\PriceAdapter;

class PricesController
{
    public function upsert(PostPrices $postPrice)
    {
        return redirect()->back()->with([
            'message' => $postPrice->upsertPrices(request()->model),
            'message' => request()->model,
        ]);
    }
}