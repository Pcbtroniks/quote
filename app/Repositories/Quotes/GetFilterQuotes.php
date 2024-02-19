<?php

namespace App\Repositories\Quotes;

use App\Models\Quote as QuoteModel;
use App\Models\QuoteActivity;
use App\Repositories\Permissions\UserPermission;
use App\Repositories\Permissions\UserRole;

class GetFilterQuotes {

    /**
     * Get the quotes
     * 
     * 
     * 
     * @param \Illuminate\Http\Request $request
     * @param bool $isFreetravelerAdmin
     * @param int $limit
     */
    public static function get($request, $isFreetravelerAdmin = false, int $limit = 10)
    {
        $quotes = QuoteModel::query();
        $quotes = new FilterQuote($quotes);

        return $quotes->ApplyRequestOptionalFilters($quotes, $request)->get();
    }

    public function getScoped($request, $limit = 15)
    {
        $query = QuoteModel::query();

        $query = FilterQuote::ApplyRequestOptionalFilters($query, $request);
        $query = FilterQuote::ApplyScopeBasedOnUserRole($query, $request);
        $query = FilterQuote::SortBy($query, $request);
        // $query = FilterQuote::ForceOnlyQuotesWithBranch($query);
        
        return $query->where('created_at', '>', '2023-06-14')
        ->with([
        'user', 
        'coupon', 
        'listed_activities', 
        'listed_activities.activity', 
        'team', 
        'listed_activities.hotel', 
        'listed_activities.hotel.zone',
        'user.branch',
        'branch'])
        ->orderBy(
            QuoteActivity::select('date')
            ->whereColumn('quote_id', 'quotes.id')
            ->latest()
            ->limit(1), 'desc')
        ->paginate($limit)
        ->onEachSide(0);
    }
}