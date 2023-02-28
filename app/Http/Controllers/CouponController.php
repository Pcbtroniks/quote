<?php

namespace App\Http\Controllers;

use App\Models\Coupon as ModelsCoupon;
use App\Repositories\Coupons\Coupon;
use Illuminate\Support\Facades\Mail;
use App\Models\Quote as QuoteModel;
use App\Repositories\Quotes\Quote;
use App\Mail\FinalCouponMail;
use Illuminate\Http\Request;
use App\Mail\QuoteCreated;

class CouponController extends Controller
{
    
    public function searchByCode(Coupon $coupon, $code)
    {

        return $coupon->getCouponWith($code) ?? response(['status'=> 404,'message'=>'Content Not Found']);
    
    }

    public function keyConfirm(Coupon $couponRepo, $coupon) {
        if($couponRepo->hasConfirmationKey($coupon)){
            return redirect()->back()->with(['status' => 'error', 'msg' => 'El cupón ya ha tiene clave de confirmación.']);
        }
        $couponRepo->setConfirmationKey($coupon, request()->confirmation_key);
        return redirect()->back()->with(['status' => 'ok', 'msg' => 'Se ha guardado la clave de confirmación del cupón.', 'data' => request()->confirmation_key]);
    }

    public function getCode(QuoteModel $quote)
    {
        Mail::to('freetraveler@freetraveler.com.mx')->send(new QuoteCreated($quote));
        Coupon::setPendingStatus($quote->coupon);
        return response()->json(['ok' => Coupon::setCode($quote->coupon_id)]);
    }

    public function requestCode(QuoteModel $quote)
    {
        Mail::to('freetraveler@freetraveler.com.mx')->send(new QuoteCreated($quote));
        Quote::setPendingStatus($quote);
        return response()->json(['ok' => 'yes', 'msg' => 'Se ha realizado la solicitud de su código de cupón.']);
    }

    public function getCoupon(QuoteModel $quote)
    {
        Coupon::storeCouponWithCode($quote);
        return response()->json(['status' => 'ok', 'msg' => 'Se ha creado el cupón.', 'data' => $quote->coupon]);
    }

    public function confirmCoupon(ModelsCoupon $coupon)
    {
        Coupon::setConfirmedStatus($coupon);
        Quote::setConfirmedStatus($coupon->quote);
        return back()->with(['msg' => 'Confirmed']);
    }

    public function sendByEmail(ModelsCoupon $coupon)
    {
        Mail::to($coupon->quote->user->email)->send(new FinalCouponMail($coupon->quote));
        return back()->with(['msg' => 'Sent']);
    }

    public function preview(Quote $quoteData, $uuid)
    {
        $quote = $quoteData->preview($uuid);
        return view('Coupon.CouponPDF', compact('quote'));
    }
}
