<?php

namespace App\Services\Quote;

class QuoteFilterService
{
    /**
     * Get available filters as array
     * 
     * @return array
     */
    public static function GetFilters(): array
    {
        return [
            'coupon_status',
            'from_date',
            'to_date',
            'branch_id',
            'user_id',
            'page',
        ];
    }

    public static function GetDefaultFilterValues(): array
    {
        return [
            'coupon_status' => 'null',
            'from_date' => date('Y-m-d', strtotime('-1 month')),
            'to_date' => date('Y-m-d'),
            'branch_id' => 'none',
            'user_id' => 'none',
            'page' => 1,
            'action' => 'sing',
        ];
    }

    public static function ParseFiltersFromRequest($request)
    {
        $filters = [];
        foreach (self::GetFilters() as $filter) {
            if ($request->has($filter)) {
                $filters[$filter] = $request->input($filter);
            }
        }
        return $filters;
    }

    public static function ToQueryString($filters)
    {
        $queryString = '';
        foreach ($filters as $key => $value) {
            if ($value) {
                $queryString .= $key . '=' . $value . '&';
            }
        }
        return $queryString;
    }

    public static function useFromRequest($request)
    {
        $filters = self::GetDefaultFilterValues();
        foreach (self::GetFilters() as $filter) {
            if ($request->has($filter)) {
                $filters[$filter] = $request->input($filter);
            }
        }
        return $filters;
    }

    public function ApplyFilters($query, $filters)
    {
        if (isset($filters['coupon_status'])) {
            $query->where('coupon_status', $filters['coupon_status']);
        }
        if (isset($filters['from_date'])) {
            $query->where('created_at', '>=', $filters['from_date']);
        }
        if (isset($filters['to_date'])) {
            $query->where('created_at', '<=', $filters['to_date']);
        }
        if (isset($filters['branch_id'])) {
            $query->where('branch_id', $filters['branch_id']);
        }
        if (isset($filters['user_id'])) {
            $query->where('user_id', $filters['user_id']);
        }
        return $query;
    }

    public static function canLoadFilter($request)
    {
        return $request->has('action') && $request->input('action') == 'sing';
    }

    public static function requestHasFilters($request)
    {
        $filters = self::GetFilters();
        foreach ($filters as $filter) {
            if (!$request->has($filter)) {
                return false;
            }
        }
        return true;
    }

}