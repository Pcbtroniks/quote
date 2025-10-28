<?php

namespace App\Repositories\Activities;

use Illuminate\Support\Facades\DB;

class Pickup {

    private $pickup;

    public function __construct()
    {
        $this->pickup = ['response' => null];
    }

    public function get( $activity , $hotel ){
        return DB::table('pickups', 'p')
        ->where('hotel_id', $hotel)
        ->where('activity_id', $activity)
        ->whereNull('p.deleted_at')
        ->join('activities as a', 'p.activity_id', '=', 'a.id')
        ->join('hotels as h', 'p.hotel_id', '=', 'h.id')
        ->join('zones as z', 'p.zone_id', '=', 'z.id')
        ->first(['p.pickup_time', 'a.name as activity', 'h.name as hotel', 'z.name as zone']);
    }

    public function getOrNull( $activity, $hotel){
        return $this->get($activity, $hotel) ?? $this->pickup;
    }

    public function getHotel( $hotel ){
        return DB::table('pickups', 'p')
        ->where('hotel_id', $hotel)
        ->join('activities as a', 'p.activity_id', '=', 'a.id')
        ->join('hotels as h', 'p.hotel_id', '=', 'h.id')
        ->join('zones as z', 'p.zone_id', '=', 'z.id')
        ->get(['p.pickup_time', 'a.name as activity', 'h.name as hotel', 'z.name as zone']);
    }

    public static function archivePickup( $pickupId ){
        return DB::table('pickups')
        ->where('id', $pickupId)
        ->update(['deleted_at' => now()]);
    }
}