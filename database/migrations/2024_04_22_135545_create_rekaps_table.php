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
        Schema::create('rekaps', function (Blueprint $table) {
            $table->id();
            $table->string('pangkat', 250)->nullable();
            $table->integer('sd')->nullable();
            $table->integer('smp')->nullable();
            $table->integer('sma')->nullable();
            $table->integer('d3')->nullable();
            $table->integer('s1')->nullable();
            $table->integer('s2')->nullable();
            $table->integer('s3')->nullable();
            $table->integer('seba')->nullable();
            $table->integer('sbp')->nullable();
            $table->integer('setukpa')->nullable();
            $table->integer('sepa')->nullable();
            $table->integer('sekbang_tni')->nullable();
            $table->integer('akpl')->nullable();
            $table->integer('ptik')->nullable();
            $table->integer('seskoau')->nullable();
            $table->integer('seskoal')->nullable();
            $table->integer('sespimma')->nullable();
            $table->integer('sespmen')->nullable();
            $table->integer('pmtik_1')->nullable();
            $table->integer('pmtik_2')->nullable();
            $table->integer('pka')->nullable();
            $table->integer('sespati')->nullable();
            $table->integer('lemhanas')->nullable();
            $table->integer('pag_pa')->nullable();
            $table->integer('pag_ba')->nullable();
            $table->integer('sar')->nullable();
            $table->integer('dspa')->nullable();
            $table->integer('pank')->nullable();
            $table->integer('patk')->nullable();
            $table->integer('paidk')->nullable();
            $table->integer('pa_lakalaut')->nullable();
            $table->integer('dsbpa')->nullable();
            $table->integer('bank')->nullable();
            $table->integer('batk')->nullable();
            $table->integer('dstpa')->nullable();
            $table->integer('kmlk')->nullable();
            $table->integer('baidik')->nullable();
            $table->integer('harwat_kapal')->nullable();
            $table->integer('juri_mudi_c')->nullable();
            $table->integer('selam')->nullable();
            $table->integer('kapal_b')->nullable();
            $table->integer('kapal_c')->nullable();
            $table->integer('ant_1')->nullable();
            $table->integer('ant_2')->nullable();
            $table->integer('ant_3')->nullable();
            $table->integer('ant_5')->nullable();
            $table->integer('att_1')->nullable();
            $table->integer('att_2')->nullable();
            $table->integer('att_3')->nullable();
            $table->integer('att_5')->nullable();
            $table->integer('dpmkn_tk_2')->nullable();
            $table->integer('dpmkn_tk_3')->nullable();
            $table->integer('dpdkn_tk_2')->nullable();
            $table->integer('dpdkn_tk_3')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rekaps');
    }
};
