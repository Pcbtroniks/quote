<?php

namespace App\Repositories\Invoices;

use App\Enums\InvoiceStatus;
use App\Models\Coupon;
use App\Models\Invoice as InvoiceModel;
use Illuminate\Http\Request;

class Invoice {

    private $invoice;
    
    public function __construct(InvoiceModel $invoice) {
     
        $this->invoice = $invoice;
     
    }

    public function get() {
     
        return $this->invoice::all();
     
    }

    public function find(InvoiceModel $ID) {
     
        return $this->invoice::find($ID);
     
    }

    public function syncCoupon($invoice, $coupon) {

        return Coupon::where('id', $coupon)->update([
            'invoice_id' => $invoice
        ]);

    }

    public function unSyncCoupon($invoice, $coupon) {

        return Coupon::where('id', $coupon)->update([
            'invoice_id' => null
        ]);

    }
    
    public function getPaginated(int $limit = 5) {
     
        return $this->invoice::with('coupons','provider')->paginate($limit);
     
    }

    public function store(Request $request){

        return $this->invoice::create([
            'folio' => $request->folio,
            'amount' => $request->amount,
            'provider_id' => $request->provider_id,
            'status'=> InvoiceStatus::UNPAID
        ]);

    }

}