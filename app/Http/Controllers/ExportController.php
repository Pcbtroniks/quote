<?php

namespace App\Http\Controllers;

use App\Repositories\Exports\Manifest;
use Maatwebsite\Excel\Facades\Excel;
use App\Exports\ManifestExport;
use App\Models\Invoice;
use App\Models\Quote;
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

    public function exportPDFProformQuote(Quote $quote)
    {
        // dd($this->printTempFolio($quote));
        // dd($quote);
        $quote->tmpFolio = $this->printTempFolio($quote);
        // return view('Exports.ProformQuote', [
        //     'quote' => $quote,
        // ]);

        Pdf::setOption(['dpi' => 150, 'defaultFont' => 'sans-serif']);
        $pdf = Pdf::loadView('Exports.ProformQuote', ['quote' => $quote]);
        return $pdf->download('Proform-quote.pdf');
    }
    public function exportPDFProformQuoteView(Quote $quote)
    {
        Pdf::setOption(['dpi' => 150, 'defaultFont' => 'sans-serif']);
        $pdf = Pdf::loadView('Exports.ProformQuote', ['quote' => $quote]);
        $quote->tmpFolio = $this->printTempFolio($quote);

        if(request()->has('action') && request()->get('action') == 'download')
        {
            return $this->exportPDFProformQuote($quote);
        } else if(request()->has('action') && request()->get('action') == 'view')
        {
            return view('Exports.ProformQuote', [
                'quote' => $quote,
            ]);
        } else {
            return $pdf->stream('Proform-quote.pdf');
        }
    }

    public function printTempFolio($quote) {
        $agency = $quote['team']['name'];
        $months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
        [$day, $month, $year] = explode('/', $quote['created_at']);
        return substr($agency, 0, 3) . '-' . $quote['id'] . '-' . $day . $months[$month - 1] . substr($year, 2, 2);
    }

    public function exportPDFQuote(Quote $quote)
    {
        return view('Exports.Quote', [
            'quote' => $quote,
        ]);
    }

    public function exportPDFQuoteDownlaod(Quote $quote)
    {
        $quote->logo = ($quote->team->logo == '\\assets\\exploreemotions-logo.png')
        ? public_path('assets/exploreemotions-logo.png')
        : public_path('/storage/' . $quote->team->logo);
        Pdf::setOption(['dpi' => 150, 'defaultFont' => 'sans-serif']);
        $pdf = Pdf::loadView('Exports.Quote', ['quote' => $quote]);
        return $pdf->download('exploreemotions-quote.pdf');
    }

    public function exportPDFQuoteView(Quote $quote)
    {
        $quote->logo = public_path('assets/icons/calendar.svg');
        Pdf::setOption(['dpi' => 150, 'defaultFont' => 'sans-serif']);
        $pdf = Pdf::loadView('Exports.Quote', ['quote' => $quote]);
        return $pdf->stream("dompdf_out.pdf", array("Attachment" => false));
        exit(0);
    }

}
