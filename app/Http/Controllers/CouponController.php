<?php

namespace App\Http\Controllers;

use App\Repositories\Coupons\Coupon;
use Illuminate\Http\Request;

class CouponController extends Controller
{
    
    public function searchByCode(Coupon $coupon, $code)
    {

        return $coupon->getCouponWith($code) ?? response(['status'=> 404,'message'=>'Content Not Found']);
    
    }

    public function keyConfirm(Coupon $coupon, $couponId) {
        
        $coupon->setConfirmationKey($couponId, request()->confirmation_key);
        return back()->with(['msg' => 'Confirmed']);
    }
}
