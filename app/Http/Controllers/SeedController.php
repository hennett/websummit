<?php

namespace App\Http\Controllers;

use App\Startup;
use Illuminate\Support\Facades\Storage;

class SeedController extends Controller
{
    public function SeedDatabase()
    {
        if (Storage::disk('public')->exists('lisbon-startups.json')) {
            $contents = Storage::disk('public')->get('lisbon-startups.json');
            $json = json_decode($contents, true);
            foreach ($json['startups'] as $data) {
                Startup::create([
                    'company_name' => $data['company_name'],
                    'parent_industry' => $data['parent_industry'],
                    'country' => $data['country'],
                    'city' => $data['city'],
                    'track' => $data['track'],
                    'elevator_pitch' => $data['elevator_pitch'],
                    'website_url' => $data['website_url']
                ])->save();
            }
            return response()->json(['msg' => 'Seed has completed successfully!']);
        }

        return response()->json(['error' => 'File not found!'], 404);
    }
}
