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
        Schema::table('quotes', function (Blueprint $table) {
            $table->string('currency', 3)->default('MXN');
            $table->foreignId('currency_id')
                    ->constrained('currencies')
                    ->onDelete('cascade')
                    ->onUpdate('cascade')
                    ->default(null)
                    ->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('quotes_', function (Blueprint $table) {
            //
        });
    }
};
