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

}