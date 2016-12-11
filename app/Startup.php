<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Startup extends Model
{
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'company_name', 'parent_industry', 'country', 'city', 'track', 'elevator_pitch', 'website_url'
    ];
}
