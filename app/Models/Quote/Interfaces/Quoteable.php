<?php

namespace App\Models\Quote\Interfaces;

interface Quoteable {

    public static function addActivity($quote_id, $activity_id, $hotel_id, $pickup_time, $date);

}