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
        'agency_price',
        'paid_status',
    ];

    public function quote(){

        return $this->hasOne(Quote::class);

    }
}
