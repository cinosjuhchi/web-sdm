<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('pegawais', function (Blueprint $table) {
            $table->id();
            $table->string('pangkat', 250)->nullable();
            $table->bigInteger('nrp')->nullable();
            $table->string('nama', 250)->nullable();
            $table->string('dikum', '250')->nullable();
            $table->string('dikpol', '250')->nullable();
            $table->string('fungsi_polair', '250')->nullable();
            $table->string('diklat', '250')->nullable();
            $table->string('dikbangspes', '250')->nullable();
            $table->string('bagian', '250')->nullable();
            $table->string('fungsi_poludara', '250')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pegawais');
    }
};
