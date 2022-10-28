<?php

namespace App\Repositories\Zones;

use App\Models\Hotel as HotelModel;
use App\Models\Zone as ModelsZone;

class Hotel {

    public function getByZone($zone){

        return HotelModel::where('zone_id', $zone)->get(['id','name','zone_id']);

    }

}