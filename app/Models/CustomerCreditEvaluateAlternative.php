<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use \Illuminate\Database\Eloquent\Relations\BelongsTo;

class CustomerCreditEvaluateAlternative extends Model
{
    use HasFactory;

    protected $fillable = [
        'customer_credit_id',
        'value'
    ];

    public function criteria(): BelongsTo
    {
        return $this->belongsTo(Criteria::class);
    }
}
