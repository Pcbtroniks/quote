<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreInvoiceRequest;
use App\Models\Coupon;
use App\Models\Invoice as InvoiceModel;
use App\Models\Quote;
use App\Repositories\Invoices\Invoice;
use Illuminate\Http\Request;

class InvoiceController extends Controller
{

    public function index(Invoice $invoice){

        $invoices = $invoice->getPaginated(10);
        return inertia('Invoices/Create', compact('invoices'));
    }

    public function store(StoreInvoiceRequest $request, Invoice $invoice){

        $invoice->store($request);

        return to_route('invoices')->banner('Invoice created successfully.');;
    }

    public function invoiceCoupons(Request $request, InvoiceModel $invoice){
        $coupon = Coupon::where('code', 'TIM00001')->first();
        $coupon->quote = Quote::with('listed_activity')->where('coupon_id', 2)->first();
        dd($coupon);
        $coupon->quote->listed_activity->load('activity');
    
        return $coupon ?? response(['status'=> 404,'message'=>'Content Not Found']);
        return inertia('Invoices/Show', compact('invoice'));

    }

    public function searchCoupon(Request $request){

        return Coupon::where('code', $request->coupon)->first();

    }

}
