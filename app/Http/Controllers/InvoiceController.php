<?php

namespace App\Http\Controllers;

use App\Repositories\Coupons\Coupon as CouponsCoupon;
use App\Http\Requests\StoreInvoiceRequest;
use App\Repositories\Providers\Provider;
use App\Models\Invoice as InvoiceModel;
use App\Repositories\Invoices\Invoice;
use Illuminate\Http\Request;
use App\Models\Coupon;
use App\Models\Quote;


class InvoiceController extends Controller
{

    public function index(Invoice $invoice, Provider $provider){

        $invoices = $invoice->getPaginated(10);
        $providers = $provider->getAllProviders();
        return inertia('Invoices/Create', compact('invoices', 'providers'));
    }

    public function store(StoreInvoiceRequest $request, Invoice $invoice){

        $invoice->store($request);

        return to_route('invoices')->banner('Invoice created successfully.');;
    }

    public function invoiceCoupons(Request $request, CouponsCoupon $coupons,InvoiceModel $invoice){

        $coupons = $coupons->getPaginateWhere($invoice->id);
    
        return inertia('Invoices/Show', compact('invoice', 'coupons'));
        
    }

    public function syncCoupon(Invoice $invoice){

        $invoice->syncCoupon(request()->invoice, request()->coupon);

        return response(['msg' => 'Success!', 'status' => 200,  'content' => $invoice]);
    
    }
    public function unSyncCoupon(Invoice $invoice){

        $invoice->unSyncCoupon(request()->invoice, request()->coupon);

        return response(['msg' => 'Success!', 'status' => 200,  'content' => $invoice]);
    
    }
    
    public function searchByCode($code = 'TIM00001'){
        $coupon = Coupon::where('code', $code)->first();
        $coupon->quote = Quote::with('listed_activity', 'listed_activities')->where('coupon_id', $coupon->id)->first();
        $coupon->quote->listed_activity->load('activity');
        $coupon->quote->load('user');
        
        return $coupon ?? response(['status'=> 404,'message'=>'Content Not Found']);

    }

public function destroy($invoiceId)
{
    $invoiceRepo = new \App\Repositories\Invoices\Invoice(new \App\Models\Invoice());
    $result = $invoiceRepo->delete($invoiceId);
    if ($result) {
        return response(['msg' => 'Invoice deleted successfully!', 'status' => 200]);
    } else {
        return response(['msg' => 'Invoice not found', 'status' => 404], 404);
    }
}

}
