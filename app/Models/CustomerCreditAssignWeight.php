<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use \Illuminate\Database\Eloquent\Relations\BelongsTo;

class CustomerCreditAssignWeight extends Model
{
    use HasFactory;

    public function customerCredit(): BelongsTo
    {
        return $this->belongsTo(CustomerCredit::class);
    }

    public function criteria(): BelongsTo
    {
        return $this->belongsTo(Criteria::class);
    }
}
