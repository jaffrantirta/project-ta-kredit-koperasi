<?php

use App\Models\Criteria;
use App\Models\CustomerCredit;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('customer_credit_evaluate_alternatives', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Criteria::class);
            $table->foreignIdFor(CustomerCredit::class);
            $table->float('value');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('customer_credit_evaluate_alternatives');
    }
};
