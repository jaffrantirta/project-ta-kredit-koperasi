<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use \Illuminate\Database\Eloquent\Relations\BelongsTo;

class CustomerCreditNormalization extends Model
{
    use HasFactory;

    public function criteria(): BelongsTo
    {
        return $this->belongsTo(Criteria::class);
    }
}
