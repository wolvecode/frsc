<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDriversContactsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('drivers_contacts', function (Blueprint $table) {
            $table->id();
            $table->foreignId('driver_id')->constrained('drivers')->onDelete('cascade');
            $table->string('address_1');
            $table->string('city');
            $table->string('lga');
            $table->string('state');
            $table->string('postal_code');
            $table->string('address_2')->nullable();
            $table->string('city_2')->nullable();
            $table->string('lga_2')->nullable();
            $table->string('state_2')->nullable();
            $table->string('postal_code_2')->nullable();
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
        Schema::dropIfExists('drivers_contacts');
    }
}
