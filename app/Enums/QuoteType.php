<?php

namespace App\Enums;

enum QuoteType: string 
{
    case Entrance = 'entrada';
    case Tour = 'tour';
    case Pack = 'pack';

    public static function is($value, QuoteType $comparator)
    {
        return ['get' => $value, 'request' => $comparator->value,'cases' => self::cases(), 'return' => $value == $comparator->value];
    }
}