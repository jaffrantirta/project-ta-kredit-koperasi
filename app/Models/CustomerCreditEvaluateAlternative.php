<?php

namespace App\Models;

use App\Enums\CreditWeightValue;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Validation\Rules\Enum;
use \Illuminate\Database\Eloquent\Relations\BelongsTo;

class CustomerCreditEvaluateAlternative extends Model
{
    use HasFactory;

    protected $fillable = [
        'customer_credit_id',
        'criteria_id',
        'value'
    ];

    protected $casts = [
        'value' => CreditWeightValue::class
    ];

    public function criteria(): BelongsTo
    {
        return $this->belongsTo(Criteria::class);
    }
}
