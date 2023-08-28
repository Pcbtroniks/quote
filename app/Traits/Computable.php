<?php

namespace App\Traits;

trait Computable {

    public function applyDiscount($amount, $DiscountRate)
    {
        return (float) number_format(($amount * ( ( 100 - $DiscountRate ) / 100 )), 2, '.', '');
    }

    public function useDiscount($amount, $DiscountRate)
    {
        return (float) number_format(($amount * ( ( 100 - $DiscountRate ) / 100 )), 2, '.', '');
    }

}