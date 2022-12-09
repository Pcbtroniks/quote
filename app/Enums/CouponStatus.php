<?php

namespace App\Enums;

enum CouponStatus: string {
 
    case CREATED = 'Created';
    case CONFIRMED = 'Confirmed';
    case CANCELLED = 'Cancelled';
    
}