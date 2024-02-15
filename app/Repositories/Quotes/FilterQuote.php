<?php

namespace App\Repositories\Quotes;

use App\Repositories\Permissions\UserPermission;
use App\Repositories\Permissions\UserRole;
use App\Repositories\Quotes\Filter;

class FilterQuote {

    protected $QueryBuilder;

    public function __construct($QueryBuilder)
    {
        $this->QueryBuilder = $QueryBuilder;
    }

    public function _ApplyRequestOptionalFilters($query, $request)
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

    // Scoped Filters
    public static function ApplyRequestOptionalFilters($query, $request)
    {
        return $query->when((UserPermission::CanManageAgencies($request->user()) && $request->filter_agency), function ($q) use ($request){
            $q->where('team_id', $request->filter_agency);
        })
        ->when( (UserPermission::CanManageBranches($request->user()) && $request->filter_branch), function ($q) use ($request){
            $q->where('team_id', $request->user()->currentTeam->id);
        });
    }
    public static function ApplyScopeBasedOnUserRole($query, $request)
    {
        if($request->user()->isFreetravelerAdmin()) {
            return $query;
        };

        $scopedQuery = $query->where('team_id', $request->user()->currentTeam->id);

        if(UserRole::isAgencyAdmin($request->user())) {
            return $scopedQuery;
        }
        if(isset($request->user()->branch->id) && !is_null($request->user()->branch->id)){
            $scopedQuery = $scopedQuery->where('branch_id', $request->user()->branch->id);
        }

        if(UserRole::isBranchAdmin($request->user())) {
            return $scopedQuery;
        }
        if(UserRole::isSeller($request->user())){
            return $scopedQuery->where('user_id', $request->user()->id);
        }

        return $scopedQuery;
    }
    public static function ForceOnlyQuotesWithBranch($query)
    {
        return $query->whereNotNull('branch_id');
    }

    public static function SortBy($query, $request)
    {
        if($request->has('sort_by'))
        {
            $query->orderBy($request->input('sort_by'), $request->input('sort_order', 'desc'));
        }
        return $query;
    }
}