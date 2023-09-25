<?php

namespace App\Repositories\Quotes;

use App\Models\Quote as QuoteModel;
use App\Repositories\Permissions\UserPermission;
use App\Repositories\Permissions\UserRole;

class GetQuotes {

    /**
     * Get the quotes
     * 
     * 
     * 
     * @param \Illuminate\Http\Request $request
     * @param bool $isFreetravelerAdmin
     * @param int $limit
     */
    public function get($request, $isFreetravelerAdmin = false, int $limit = 10)
    {
        return QuoteModel::when( !$isFreetravelerAdmin , function ($q)
        {
            $q->where('team_id', auth()->user()->currentTeam->id);
        })
        ->when($request->user()->branch, function ($q) use ($request){
            $q->where('branch_id', $request->user()->branch->id);
        })
        ->when($request->date, function ($q) use ($request){
            $q->whereHas('listed_activities', function ($q) use($request) {
                $q->where('date', $request->date);
            });
        })
        ->when($request->type, function ($q) use ($request){
            $q->where('type', $request->type);
        })
        ->when($request->filter_agency, function ($q) use ($request){
                $q->where('team_id', $request->filter_agency);
        })
        ->when($request->zone, function ($q) use ($request){
            $q->whereHas('listed_activities.hotel.zone', function ($q) use($request) {
                $q->whereId($request->zone);
            });
        })
        ->where('created_at', '>', '2023-06-14')
        ->with([
        'user', 
        'coupon', 
        'listed_activities', 
        'listed_activities.activity', 
        'team', 
        'listed_activities.hotel', 
        'listed_activities.hotel.zone'])
        ->paginate($limit)
        ->onEachSide(0);
    }

    public function getScoped($request, $limit = 15)
    {
        $query = QuoteModel::query();

        $query = $this->ApplyRequestOptionalFilters($query, $request);
        $query = $this->ApplyScopeBasedOnUserRole($query, $request);
        // $query = $this->ForceOnlyQuotesWithBranch($query);
        
        return $query->where('created_at', '>', '2023-06-14')
        ->with([
        'user', 
        'coupon', 
        'listed_activities', 
        'listed_activities.activity', 
        'team', 
        'listed_activities.hotel', 
        'listed_activities.hotel.zone'])
        ->orderBy('created_at', 'desc')
        ->paginate($limit)
        ->onEachSide(0);
    }


    /**
     * Apply scope based on user role like agency admin, branch admin, etc
     * 
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @param \Illuminate\Http\Request $request
     * 
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function ApplyScopeBasedOnUserRole($query, $request)
    {
        if($request->user()->isFreetravelerAdmin()) {
            return $query;
        };

        $scopedQuery = $query->where('team_id', $request->user()->currentTeam->id);

        if(UserRole::isAgencyAdmin($request->user())) {
            return $scopedQuery;
        }
        if(!is_null($request->user()->branch)){
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

    public static function ApplyRequestOptionalFilters($query, $request)
    {
        return $query->when((UserPermission::CanManageAgencies($request->user()) && $request->filter_agency), function ($q) use ($request){
            $q->where('team_id', $request->filter_agency);
        })
        ->when( (UserPermission::CanManageBranches($request->user()) && $request->filter_branch), function ($q) use ($request){
            $q->where('team_id', $request->user()->currentTeam->id);
        });
    }

    public function ForceOnlyQuotesWithBranch($query)
    {
        return $query->whereNotNull('branch_id');
    }
}