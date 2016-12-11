<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateStartupsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('startups', function (Blueprint $table) {
            $table->increments('id');
            $table->string('company_name');
            $table->string('parent_industry');
            $table->string('country');
            $table->string('city')->nullable();
            $table->string('track');
            $table->string('elevator_pitch');
            $table->string('website_url');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('startups');
    }
}
