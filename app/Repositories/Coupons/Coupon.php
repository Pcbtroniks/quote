<?php

namespace App\Repositories\Coupons;

use App\Enums\CouponStatus;
use App\Models\Coupon as CouponModel;
use App\Models\Quote;

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

    public static function generateCode($id, $prefix = 'EEM', $length = 5)
    {
        return $prefix . str_pad($id, $length, '0', STR_PAD_LEFT);
    }

    public static function updateCode($data)
    {
        $coupon = CouponModel::find($data['coupon_id']);
        if ($coupon) {
            $coupon->update(['code' => $data['code'] ?? self::generateCode($data['coupon_id'])]);
            return response()->json(['status' => 'ok', 'msg' => 'Coupon code updated successfully.', 'data' => $coupon]);
        }
        return response()->json(['status' => 'error', 'msg' => 'Coupon not found.'], 404);
    }

    /**
     * Generate and Set a new code for a coupon
     * 
     * 
     * @param int $couponID
     * @param string $code
     * @return bool
     */
    public static function setCode(int $couponID, $code = null)
    {
        return CouponModel::where('id', $couponID)
                ->update(['code' => $code ?? self::generateCode($couponID)]);
    }

    public static function storeCouponWithCode(Quote $quote)
    {     
            $coupon = CouponModel::create([
                'status' => CouponStatus::Created,
            ]);
            $id = self::countByPrefix('EEM') + 1;
            $coupon->update([
                'code' => self::generateCode($id),
            ]);

            $quote->update([
                'coupon_id' => $coupon->id,
            ]);

            return $coupon;
    }

    public static function hasConfirmationKey($coupon)
    {     
        $coupon = CouponModel::where('id', $coupon)->first();
        return $coupon->confirmation_key != null;
    }

    public static function setPendingStatus(CouponModel $coupon)
    {     
            return $coupon->setStatus(CouponStatus::Pending);
    }

    public static function setConfirmedStatus(CouponModel $coupon)
    {     
            return $coupon->setStatus(CouponStatus::Confirmed);
    }

    public static function setCancelStatus(CouponModel $coupon)
    {     
            return $coupon->setStatus(CouponStatus::Cancelled);
    }

    /**
     * Get count of coupons whose code begins with a given string
     * @param string $prefix
     * @return int
     */
    public static function countByPrefix($prefix)
    {
        return CouponModel::where('code', 'like', $prefix . '%')->count();
    }
}