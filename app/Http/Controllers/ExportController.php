<?php

namespace App\Http\Controllers;

use Maatwebsite\Excel\Facades\Excel;
use App\Exports\ManifestExport;
use App\Repositories\Exports\Manifest;

class ExportController extends Controller
{
    
    public function index()
    {
        return Excel::download(new ManifestExport, 'manifest.xlsx');
    }
    
    public function exportManifest()
    {
        return Excel::download(new ManifestExport, 'manifest.xlsx');
    }

    public function viewManifest()
    {
        return view('Exports.Manifest', [
            'manifest' => Manifest::getManifestByInvoice(),
        ]);
    }

}
