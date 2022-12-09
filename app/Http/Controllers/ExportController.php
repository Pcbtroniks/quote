<?php

namespace App\Http\Controllers;

use Maatwebsite\Excel\Facades\Excel;
use App\Exports\ManifestExport;
use App\Models\Invoice;
use App\Repositories\Exports\Manifest;

class ExportController extends Controller
{
    
    public function index()
    {
        // return Excel::download(new ManifestExport, 'manifest.xlsx');
    }
    
    public function exportManifest(Invoice $invoiceID)
    {
        return Excel::download(new ManifestExport($invoiceID->id), 'manifest-'.$invoiceID->folio.'.xlsx');
    }

    public function viewManifest($invoiceID)
    {
        return view('Exports.Manifest', [
            'manifest' => Manifest::getManifestByInvoice($invoiceID),
        ]);
    }

}
