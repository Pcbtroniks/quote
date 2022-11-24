<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreInvoiceRequest;
use App\Repositories\Invoices\Invoice;
use Illuminate\Http\Request;

class InvoiceController extends Controller
{

    public function index(){
        return inertia('Invoices/Create');
    }

    public function store(StoreInvoiceRequest $request, Invoice $invoice){

        $invoice->store($request);
        return $request;
    }

}
