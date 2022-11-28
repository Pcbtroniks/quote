<?php

namespace App\Models;

use App\Enums\InvoiceStatus;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Invoice extends Model
{
    use HasFactory;

    protected $casts = [
        'status' => InvoiceStatus::class,
    ];

    protected $fillable = [
        'folio',
        'status'
    ];

    public function coupons() {
     
        return $this->hasMany(Coupon::class);
    
    }
     
}
