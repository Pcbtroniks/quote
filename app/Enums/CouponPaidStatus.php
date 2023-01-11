<?php

namespace App\Enums;

enum CouponPaidStatus: string {
 
    case Paid = 'paid';
    case Unpaid = 'unpaid';
    case None = 'none';
    
}