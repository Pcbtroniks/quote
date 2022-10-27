<?php

namespace App\Http\Controllers;

use App\Models\Quote;
use App\Models\QuoteActivity;
use Illuminate\Support\Str;

use Illuminate\Http\Request;

class NDController extends Controller
{
    public function index(){
        return response()->json(['message' => Str::uuid()->toString()]);
    }

    public function quote(){
        return Quote::find(3);
        return Quote::find(3)->listed_activity[0]->activities->count();
    }

    public function activity(){
        return QuoteActivity::find(2)->activities;
    }
}
