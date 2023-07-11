<?php

namespace App\Http\Controllers\Hotels;

use App\Http\Controllers\Controller;
use App\Repositories\Zones\HotelPost;
use Illuminate\Http\Request;

class HotelController extends Controller
{
    public function jsonStore(Request $request, HotelPost $hotelPost)
    {
        $data = $request->validate([
            'name' => 'required',
            'zone_id' => 'required'
        ]);

        return response()->json([
            'hotel' => $hotelPost->storeHotel($data['name'], $data['zone_id']),
            'name' => $data['name'],
            'zone_id' => $data['zone_id'],
            'message' => 'Hotel created successfully',
        ]);
    }
}
