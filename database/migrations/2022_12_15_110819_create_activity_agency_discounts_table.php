<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('activity_agency_discounts', function (Blueprint $table) {
            $table->id();

            $table->integer('entrance')->nullable()->default(0);
            $table->integer('tour')->nullable()->default(0);
            $table->integer('pack')->nullable()->default(0);
            $table->integer('pack_double')->nullable()->default(0);
            $table->integer('pack_multiple')->nullable()->default(0);

            $table->foreignId('activity_id')
                ->nullable()
                ->constrained()
                ->cascadeOnUpdate()
                ->cascadeOnDelete();

            $table->foreignId('team_id')
                ->nullable()
                ->constrained()
                ->cascadeOnUpdate()
                ->cascadeOnDelete();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('activity_agency_discounts');
    }
};
