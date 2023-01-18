<?php

namespace App\Http\Controllers;

use App\Repositories\Coupons\Coupon;
use Illuminate\Support\Facades\Mail;
use Illuminate\Http\Request;
use App\Mail\QuoteCreated;
use App\Models\Quote as QuoteModel;

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

    public function getCode(QuoteModel $quote)
    {
        Mail::to('freetraveler@freetraveler.com.mx')->send(new QuoteCreated($quote));
        Coupon::setPendingStatus($quote->coupon);
        return response()->json(['ok' => Coupon::setCode($quote->coupon_id)]);
    }
}
