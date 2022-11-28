<?php

namespace App\Http\Controllers;

use App\Models\Coupon;
use Illuminate\Http\Request;

class CouponController extends Controller
{
    
    public function searchByCode($code)
    {

        $coupon = Coupon::with('quote', 'quote.team', 'quote.listed_activity', 'quote.listed_activity.activity', 'quote.listed_activities', 'quote.listed_activities.activity')->where('code', $code)->first();
        return $coupon ?? response(['status'=> 404,'message'=>'Content Not Found']);
    
    }
}
