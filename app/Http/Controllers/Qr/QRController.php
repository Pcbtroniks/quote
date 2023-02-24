<?php

namespace App\Http\Controllers\Qr;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class QRController extends Controller
{
    public function example($text = 'Hello World')
    {
        return view('qr.example', [
            'text' => $text
        ]);
    }
}
