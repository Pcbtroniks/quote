<?php

namespace App\Repositories\Coupons;

use App\Models\Coupon as CouponModel;

class Coupon {

    public function getPaginate(int $limit = 10) {
     
        return CouponModel::with(['quote','quote.user','quote.team'])->paginate($limit);
     
    }

    public function getPaginateWhere($invoice, int $limit = 10) {
        
        return CouponModel::where('invoice_id', $invoice)->with(['quote','quote.user','quote.team'])->paginate($limit);
     
    }

    public function getCouponWith($code) {

        return CouponModel::with('quote', 'quote.user','invoice','quote.team', 'quote.listed_activity', 'quote.listed_activity.activity', 'quote.listed_activities', 'quote.listed_activities.activity')->where('code', $code)->first();
    
    }

    public function setConfirmationKey($couponID, $key) {
     
        return CouponModel::where('id', $couponID)
                ->update(['confirmation_key' => $key]);
     
    }

    public static function generateCode($prefix = 'TIM', $id, $length = 5)
    {
        return $prefix . str_pad($id, $length, '0', STR_PAD_LEFT);
    }

    public function setCode($couponID, $code)
    {
        return CouponModel::where('id', $couponID)
                ->update(['code' => $code]);
    }
}