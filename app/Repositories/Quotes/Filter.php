<?php

namespace App\Repositories\Quotes;

class Filter
{
    /* Available filters */
    const FromDate = 'from_date';
    const ToDate = 'to_date';
    const Agency = 'team_id';
    const Status = 'status';
    const Branch = 'branch_id';
    const User = 'user';

    // quotes?from_date=14-02-2024&to_date=14-02-2024&user=jhon&agency=ventas1&status=active&branch=

    public static function toArray()
    {
        return [
            self::FromDate,
            self::ToDate,
            self::Agency,
            self::Status,
            self::Branch,
            self::User
        ];
    }
    public static function isFilter($filter)
    {
        return in_array($filter, self::toArray());
    }

    public static function formatDate($date)
    {
        return date('Y-m-d', strtotime($date));
    }
}