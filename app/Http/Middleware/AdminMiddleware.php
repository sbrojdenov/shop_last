<?php

namespace App\Http\Middleware;

use Closure;

class AdminMiddleware {

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next) {

        if (!\Auth::check()) {
             return redirect('login');
        }

        if (\Auth::user()->role != 'admin') {
            return redirect('login');
        }

        return $next($request);
    }

}
