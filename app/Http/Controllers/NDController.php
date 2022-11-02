<?php

namespace App\Http\Controllers;

use App\Models\Coupon;
use App\Models\Quote;
use App\Models\QuoteActivity;
use App\Models\Zone as ModelsZone;
use App\Repositories\Activities\Pickup;
use App\Repositories\Prices\Price;
use App\Repositories\Zones\Zone;
use Illuminate\Support\Str;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class NDController extends Controller
{
    public function index(){
        return range('A', 'C');
        return response()->json(['message' => Str::uuid()->toString()]);
    }

    public function pickups( Pickup $pickup , $activity = 1, $hotel = 1)
    {
        $return = $pickup->hotel($hotel);

        return $return ?? 'Sin pickup';
    }

    public function quote(){
        return Quote::find(3);
        // return Quote::find(3)->listed_activity[0]->activities->count();
    }

    public function quoteuuid($uuid){
        return Quote::where('uuid', $uuid)->first();
    }

    public function activity(){
        return QuoteActivity::find(2)->activities;
    }

    public function zones(){
        return ModelsZone::all();
    }

    public function price(){
        return (new Price)->getParkPrice(1, 4, 'low');
    }
}
