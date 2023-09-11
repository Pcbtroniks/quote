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
        Schema::create('quotes', function (Blueprint $table) {
            $table->id();
            $table->uuid();

            $table->foreignId('user_id')
                ->constrained()
                ->cascadeOnDelete()
                ->cascadeOnUpdate();
            
                $table->foreignId('coupon_id')
                ->nullable()
                ->constrained()
                ->cascadeOnDelete()
                ->cascadeOnUpdate()
                ->nullOnDelete();

            $table->foreignId('team_id')
                ->constrained()
                ->cascadeOnDelete()
                ->cascadeOnUpdate();

            $table->foreignId('branch_id')
                ->nullable()
                ->constrained('branch')
                ->onDelete('cascade')
                ->onUpdate('cascade')
                ->nullable();

            $table->string('national')->default('no');
            $table->string('season');
            $table->string('type', 50);
            $table->string('holder_name');
            $table->integer('adults');
            $table->integer('minors');
            $table->integer('infants');
            $table->text('observations');

            $table->decimal('public_price');
            $table->decimal('sale_amount')->nullable();
            $table->decimal('sale_percentage');
            $table->decimal('sale_amount_paid');
            $table->decimal('cost_amount')->nullable();
            $table->decimal('cost_percentage')->nullable();
            $table->decimal('cost_amount_paid')->nullable();
            $table->string('paid_status', 50)->default('unpaid');
            $table->string('status', 50)->default('created');

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
        Schema::dropIfExists('quotes');
    }
};
