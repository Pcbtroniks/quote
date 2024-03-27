<?php

namespace App\Http\Controllers\Localisation;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LocalisationController extends Controller
{
    public function currency($currency = null)
    {
        $currency = request()->currency ?? 'MXN';
        session()->put('currency', $currency);
        return redirect()->back();
    }
}
