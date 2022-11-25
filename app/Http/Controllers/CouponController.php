<?php

namespace App\Http\Controllers;

use App\Models\Coupon;
use App\Models\Quote;
use Illuminate\Http\Request;

class CouponController extends Controller
{
    
    public function searchByCode(Request $request, $code)
    {
        $coupon = Coupon::where('code', $code)->first();
        $coupon->quote = Quote::with('listed_activity', 'listed_activies')->where('coupon_id', $coupon->id)->first();
        $coupon->quote->listed_activity->load('activity');
        
        return $coupon ?? response(['status'=> 404,'message'=>'Content Not Found']);
    }

}
