<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Coupon extends Model
{
    use HasFactory;

    public $fillable = [
        'code',
        'public_price',
        'sale_amount',
        'sale_percentage',
        'sale_amount_paid',
        'cost_amount',
        'cost_percentage',
        'cost_amount_paid',
        'paid_status',
        'status',
    ];

    public function quote(){

        return $this->hasOne(Quote::class);

    }
}
