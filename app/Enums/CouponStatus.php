<?php

namespace App\Enums;

enum CouponStatus: string {
 
    case Created = 'created';
    case Confirmed = 'confirmed';
    case Pending = 'pending';
    case Cancelled = 'cancelled';
    
}