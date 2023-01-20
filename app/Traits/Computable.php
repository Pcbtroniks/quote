<?php

namespace App\Traits;

trait Computable {

    public function useFormula($amount, $DiscountRate)
    {
        return $amount * ( ( 100 - $DiscountRate ) / 100 );
    }

}