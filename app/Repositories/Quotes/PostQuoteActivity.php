<?php

namespace App\Repositories\Quotes;

use App\Models\QuoteActivity;

class PostQuoteActivity
{
    public static function updatePickupTime(QuoteActivity $quoteActivity, $newPickupTime)
    {
        $quoteActivity->pickup_time = $newPickupTime;
        $quoteActivity->save();
    }
}