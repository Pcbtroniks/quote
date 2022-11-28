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
            $table->decimal('public_price');
            $table->decimal('sale_amount');
            $table->decimal('sale_percentage');
            $table->decimal('sale_amount_paid');
            $table->decimal('cost_amount')->nullable();
            $table->decimal('cost_percentage')->nullable();
            $table->decimal('cost_amount_paid')->nullable();
            $table->string('paid_status')->default('unpaid');
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
