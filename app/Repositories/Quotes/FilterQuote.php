<?php

namespace App\Repositories\Quotes;
use App\Repositories\Quotes\Filter;

class FilterQuote {

    protected $QueryBuilder;
    private $_QueryBuilderBackup;

    public function __construct($QueryBuilder)
    {
        $this->QueryBuilder = $QueryBuilder;
    }

    public function ApplyRequestOptionalFilters($query, $request)
    {
        $this->PrepareDateFilters($request);

        foreach(Filter::toArray() as $filter)
        {
            if($request->has($filter))
            {
                $this->useFilter($filter, $request->input($filter));
            }
        }
        return $query;
    }
    public function get()
    {
        return $this->QueryBuilder->get();
    }

    // Query Builder
    public function getQuery()
    {
        return $this->QueryBuilder;
    }
    public function SetQuery($query)
    {
        $this->_QueryBuilderBackup = $this->QueryBuilder;
        $this->QueryBuilder = $query;
    }
    public function ResetQuery()
    {
        $this->QueryBuilder = $this->_QueryBuilderBackup;
    }

    // Apply Filters
    public function ApplyFilter($filter, $value)
    {
        $this->QueryBuilder = $this->QueryBuilder->where($filter, $value);
    }
    public function useFilter($filter, $value)
    {
        if(Filter::isFilter($filter))
        {
            $this->ApplyFilter($filter, $value);
        }
    }

    public function PrepareDateFilters($request)
    {
        $from_date = $request->has(Filter::FromDate);
        $to_date = $request->has(Filter::ToDate);

        if($from_date && $to_date)
        {
            return [
                Filter::FromDate => Filter::formatDate($from_date),
                Filter::ToDate => Filter::formatDate($to_date)
            ];
        } else if($from_date && !$to_date)
        {
            return [
                Filter::FromDate => Filter::formatDate($from_date),
                Filter::ToDate => Filter::formatDate($from_date)
            ];
        } else if($to_date && !$from_date)
        {
            return [
                Filter::FromDate => Filter::formatDate($to_date),
                Filter::ToDate => Filter::formatDate($to_date)
            ];
        }
        return [];
    }

    public function useDateFilters($request)
    {
        $dates = $this->PrepareDateFilters($request);
        if(count($dates) > 0)
        {
            $this->QueryBuilder = $this->QueryBuilder->whereBetween('created_at', [$dates[Filter::FromDate], $dates[Filter::ToDate]]);
        }
    }
}