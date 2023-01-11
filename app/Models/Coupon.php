<?php

namespace App\Models;

use App\Enums\CouponPaidStatus;
use App\Enums\CouponStatus;
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
        'invoice_id',
    ];

    protected $casts = [
        'paid_status' => CouponPaidStatus::class,
        'status' => CouponStatus::class,
    ];

    public function quote(){

        return $this->hasOne(Quote::class);

    }

    public function invoice() {
     
        return $this->belongsTo(Invoice::class);
     
    }

    public function setStatus($status)
    {
            return $this->update(['status' => $status]);
    }
}
