<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreInvoiceRequest;
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

}
