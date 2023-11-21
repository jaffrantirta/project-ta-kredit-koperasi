<?php

namespace App\Models;

use App\Enums\CreditWeightValue;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use \Illuminate\Database\Eloquent\Relations\BelongsTo;

class CustomerCreditAssignWeight extends Model
{
    use HasFactory;

    protected $fillable = [
        'criteria_id',
        'customer_credit_id',
        'value'
    ];

    protected $casts = [
        'value' => CreditWeightValue::class,
    ];

    public function customerCredit(): BelongsTo
    {
        return $this->belongsTo(CustomerCredit::class);
    }

    public function criteria(): BelongsTo
    {
        return $this->belongsTo(Criteria::class);
    }
}
