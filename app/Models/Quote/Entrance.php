<?php

namespace App\Models\Quote;
use App\Models\Quote\Interfaces\Quoteable;
use App\Models\QuoteActivity;

class Entrance implements Quoteable {

    public static function addActivity($quote_id, $activity_id, $date, $hotel_id = null, $pickup_time = null){
        return QuoteActivity::create([
            'quote_id' => $quote_id,
            'activity_id' => $activity_id,
            'date' => $date,
            'hotel_id' => $hotel_id,
            'pickup_time' => $pickup_time
        ]);
    }

}