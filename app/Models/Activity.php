<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Activity extends Model
{
    use HasFactory;

    public function QuoteActivity(){
        return $this->belongsToMany(QuoteActivity::class,'quote_activity');
    }
}
