<?php

namespace App\Http\Controllers;

use App\Startup;

class StartupsApiController extends Controller
{
    public function GetStartups()
    {
        $request = $this->request;
        if ($request->has('sort')) {
            list($sortCol, $sortDir) = explode('|', $request->sort);
            $query = Startup::orderBy($sortCol, $sortDir);
        } else {
            $query = Startup::orderBy('id', 'asc');
        }

        if ($request->exists('filter')) {
            $query->where(function($q) use($request) {
                $value = "%{$request->filter}%";
                $q->where('company_name', 'like', $value)
                    ->orWhere('parent_industry', 'like', $value)
                    ->orWhere('country', 'like', $value)
                    ->orWhere('city', 'like', $value)
                    ->orWhere('track', 'like', $value);
            });
        }

        $perPage = $request->has('per_page') ? (int) $request->per_page : null;
        return response()->json($query->paginate($perPage));
    }
}
