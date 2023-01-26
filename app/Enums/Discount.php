<?php

namespace App\Enums;

use UnitEnum;

enum Discount: string
{
    case Entrance = 'entrance';
    case Tour = 'tour';
    case Pack = 'pack';
    case PackDouble = 'pack_double';
    case PackMultiple = 'pack_multiple';

    public static function is(Discount $discount, $type): bool
    {
        return $type == $discount->value;
    }

    public static function Entrance(): string
    {
        return self::Entrance->value;
    }
    public static function Tour(): string
    {
        return self::Tour->value;
    }
    public static function PackDouble(): string
    {
        return self::PackDouble->value;
    }
    public static function PackMultiple(): string
    {
        return self::PackMultiple->value;
    }
}