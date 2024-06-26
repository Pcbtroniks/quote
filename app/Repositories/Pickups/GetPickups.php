<?php

namespace App\Repositories\Pickups;

use App\Repositories\Zones\ZoneDecorator;
use Illuminate\Support\Facades\DB;

class GetPickups
{
    public function getPickupsByZoneAndActivity($zone, $activity)
    {
        return DB::table('pickups as p')
                ->orderBy('h.name', 'asc')
                ->where('p.zone_id', $zone)
                ->where('p.activity_id', $activity)
                ->join('hotels as h', 'p.hotel_id', '=', 'h.id')
                ->join('activities as a', 'p.activity_id', '=', 'a.id')
                ->get(['p.id', 'p.hotel_id', 'a.name as activity', 'h.name as hotel','p.pickup_time', 'p.activity_id', 'p.zone_id']);
    }

    public function getPickupsByHotel($hotel)
    {
        return DB::table('pickups as p')
                ->where('p.hotel_id', $hotel)
                ->join('hotels as h', 'p.hotel_id', '=', 'h.id')
                ->join('activities as a', 'p.activity_id', '=', 'a.id')
                ->orderBy('a.name', 'asc')
                ->get(['p.id', 'p.hotel_id', 'p.activity_id', 'p.zone_id', 'a.name as activity', 'h.name as hotel','p.pickup_time']);

    }
}
