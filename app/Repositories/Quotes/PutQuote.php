<?php

namespace App\Repositories\Quotes;

use App\Models\Quote;

class PutQuote
{
    public static function setStatus($id, $status)
    {
        $quote = Quote::find($id);
        $quote->status = $status;
        $quote->save();
        return $quote;
    }
    public static function archive($id)
    {
        return self::setStatus($id, 'archived');
    }
}