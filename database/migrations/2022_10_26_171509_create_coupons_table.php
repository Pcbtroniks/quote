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
        Schema::create('coupons', function (Blueprint $table) {
            $table->id();

            $table->foreignId('invoice_id')
            ->constrained()
            ->cascadeOnDelete()
            ->cascadeOnUpdate();

            $table->string('code');
            $table->string('status')->default('created');
            $table->string('confirmation_key')->nullable();
            $table->string('cancellation_key')->nullable();

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
        Schema::dropIfExists('coupons');
    }
};
