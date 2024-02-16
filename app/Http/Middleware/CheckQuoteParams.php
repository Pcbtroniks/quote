<?php

namespace App\Http\Middleware;

use App\Services\Quote\QuoteFilterService;
use Closure;
use Illuminate\Http\Request;

class CheckQuoteParams
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        // $queryParams = QuoteFilterService::useFromRequest($request);
        // dd($request->all(), $request->fullUrlWithQuery($queryParams));

        if(QuoteFilterService::canLoadFilter($request))
        {
            return $next($request);
        } else {
            $queryParams = QuoteFilterService::useFromRequest($request);
            return redirect($request->fullUrlWithQuery($queryParams));
        }

    }
}
