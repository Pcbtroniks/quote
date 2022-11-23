<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Hotel extends Model
{
    use HasFactory;

    public function QuoteActivity(){

        return $this->hasMany(QuoteActivity::class,'quote_activity');
    
    }
}
