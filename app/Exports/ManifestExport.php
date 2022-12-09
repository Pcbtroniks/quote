<?php

namespace App\Exports;

use App\Repositories\Exports\Manifest;
use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;

class ManifestExport implements FromView, ShouldAutoSize
{
    public $invoiceID;
    public function __construct($invoiceID)
    {
        $this->invoiceID = $invoiceID;
    }
    /**
    * @return \Illuminate\Support\Collection
    */
    public function view(): View
    {
        return view('Exports.Manifest', [
            'manifest' => Manifest::getManifestByInvoice($this->invoiceID),
        ]);
    }
}
