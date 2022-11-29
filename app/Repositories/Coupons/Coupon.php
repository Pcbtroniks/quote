<?php

namespace App\Repositories\Coupons;

use App\Models\Coupon as CouponModel;

class Coupon {

    public function getPaginate(int $limit = 5) {
     
        return CouponModel::with(['quote','quote.user','quote.team'])->paginate($limit);
     
    }

    public function getPaginateWhere($invoice, int $limit = 5) {
        
        return CouponModel::where('invoice_id', $invoice)->with(['quote','quote.user','quote.team'])->paginate($limit);
     
    }

    public function getCouponWith($code) {

        return CouponModel::with('quote', 'quote.team', 'quote.listed_activity', 'quote.listed_activity.activity', 'quote.listed_activities', 'quote.listed_activities.activity')->where('code', $code)->first();
    
    }

    public function setConfirmationKey($couponID, $key) {
     
        return CouponModel::where('id', $couponID)
                ->update(['confirmation_key' => $key]);
     
    }

}