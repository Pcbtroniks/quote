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
    
        return inertia('Invoices/Show', compact('invoice'));
        
    }
    
    public function searchCoupon($code){
        
        $coupon = Coupon::where('code', $code)->first();
        $coupon->quote = Quote::with('listed_activity')->where('coupon_id', $coupon->id)->first();
        $coupon->quote->listed_activity->load('activity');
        
        return  response(['status'=> 404,'message'=>'Content Not Found']);

    }

}
