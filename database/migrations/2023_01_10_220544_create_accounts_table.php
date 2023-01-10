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
        Schema::create('accounts', function (Blueprint $table) {
            $table->id();

            $table->bigInteger('userId')->unsigned();
            $table->bigInteger('currencyId')->unsigned();

            $table->string('name', 50);

            $table->string('amount', 50)->default('0');
            $table->string('startAmount', 50)->default('0');
            $table->integer('type')->default(1); // 1 - cash, 2 - card

            $table->foreign('userId')->references('id')->on('users')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('currencyId')->references('id')->on('currencies')->onDelete('cascade')->onUpdate('cascade');
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
        Schema::dropIfExists('accounts');
    }
};
