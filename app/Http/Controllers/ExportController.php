<?php

namespace App\Http\Controllers;

use App\Repositories\Exports\Manifest;
use Maatwebsite\Excel\Facades\Excel;
use App\Exports\ManifestExport;
use App\Models\Invoice;

use Barryvdh\DomPDF\Facade\Pdf;

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

    // Quotes

    public function exportPDFProformQuote($quote = null)
    {
        // return view('Exports.ProformQuote');
        Pdf::setOption(['dpi' => 150, 'defaultFont' => 'sans-serif']);
        $pdf = Pdf::loadView('Exports.ProformQuote');
        return $pdf->download('Proform-quote.pdf');
    }

}
