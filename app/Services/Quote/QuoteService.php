<?php

namespace App\Services\Quote;

class QuoteService
{
    use \App\Traits\Computable;

    public function compute($amount, $DiscountRate)
    {
        return $this->useFormula($amount, $DiscountRate);
    }
}