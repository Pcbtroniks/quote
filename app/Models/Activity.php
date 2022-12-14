<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;
use App\Models\Price;

class Activity extends Model
{
    use HasFactory;

    protected $appends = ['filter_prices'];

    public function QuoteActivity(){
        return $this->belongsToMany(QuoteActivity::class,'quote_activity');
    }

    public function createdAt(): Attribute{

        return Attribute::make(
            get: fn ($date) => Carbon::parse($date)->format('d-m-Y'),
        );
    
    }

    public function prices(){
        return $this->hasMany(Price::class);
    }

    public function getFilterPricesAttribute()
    {
        return $this->prices->groupBy(['season', 'type']);
    }
}
