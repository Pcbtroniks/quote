<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Enums\InvoiceStatus;
use App\Models\Provider;
use App\Models\Coupon;

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

    public function provider() {

        return $this->belongsTo(Provider::class);
    
    }
     
}
