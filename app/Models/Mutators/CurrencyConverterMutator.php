<?php

namespace App\Models\Mutators;

use Illuminate\Database\Eloquent\Casts\Attribute;
use App\Models\Traits\ConvertCurrency;

trait CurrencyConverterMutator
{
    use ConvertCurrency;

    public function amount(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => $this->convertCurrency($value),
        );
    }
}