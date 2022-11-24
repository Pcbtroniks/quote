<?php

namespace App\Enums;

enum CouponceStatus: string {
 
    case CREATED = 'Created';
    case CONFIRMED = 'Confirmed';
    case CANCELLED = 'Cancelled';
    
}