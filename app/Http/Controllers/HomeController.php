<?php

namespace App\Http\Controllers;

use App\Repositories\Quotes\Quote;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index(){

        return response()->json(['message' => 'Welcome']);

    }
}
