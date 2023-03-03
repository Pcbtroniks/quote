<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class CheckCurrentTeam
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
        if (auth()->check() && !$this->authUserHasTeam($request)) {
            return abort(404);
        }

        return $next($request);
    }

    /**
     * Determine if the authenticated user has a current team.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return bool
     */
    protected function authUserHasTeam(Request $request)
    {
        return isset($request->user()->currentTeam->id);
    }
}
