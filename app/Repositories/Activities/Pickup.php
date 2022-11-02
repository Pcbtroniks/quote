<?php

namespace App\Repositories\Activities;

use Illuminate\Support\Facades\DB;

class Pickup {


    public function get($activity, $hotel){
        return DB::table('pickups', 'p')
        ->where('hotel_id', $hotel)
        ->where('activity_id', $activity)
        ->join('activities as a', 'p.activity_id', '=', 'a.id')
        ->join('hotels as h', 'p.hotel_id', '=', 'h.id')
        ->join('zones as z', 'p.zone_id', '=', 'z.id')
        ->first(['p.pickup_time', 'a.name as activity', 'h.name as hotel', 'z.name as zone']);
    }

    public function hotel( $hotel){
        return DB::table('pickups', 'p')
        ->where('hotel_id', $hotel)
        ->join('activities as a', 'p.activity_id', '=', 'a.id')
        ->join('hotels as h', 'p.hotel_id', '=', 'h.id')
        ->join('zones as z', 'p.zone_id', '=', 'z.id')
        ->get(['p.pickup_time', 'a.name as activity', 'h.name as hotel', 'z.name as zone']);
    }

}