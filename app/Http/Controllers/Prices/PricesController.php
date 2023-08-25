<?php

namespace App\Http\Controllers\Prices;

use App\Repositories\Prices\PostPrices;
use App\Repositories\Prices\PostCosts;
use App\Services\Price\PriceAdapter;

class PricesController
{
    public function upsert(PostPrices $postPrice)
    {
        return redirect()->back()->with([
            'message' => $postPrice->upsertPrices(request()->model),
            'data' => request()->model,
        ]);
    }

    public function upsertCosts(PostCosts $postPrice)
    {
        return redirect()->back()->with([
            'message' => $postPrice->upsertCosts(request()),
            'data' => request()->model,
        ]);
    }
}