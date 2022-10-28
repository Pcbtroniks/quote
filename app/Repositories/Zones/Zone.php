<?php

namespace App\Repositories\Zones;

use App\Models\Zone as ModelsZone;

class Zone {

    public function all(){

        return ModelsZone::all('id', 'name');
    
    }

}