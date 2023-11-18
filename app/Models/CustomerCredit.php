<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use \Illuminate\Database\Eloquent\Relations\BelongsTo;

class CustomerCredit extends Model
{
    use HasFactory, SoftDeletes;
    protected $fillable = [
        'purpose',
        'description',
        'customer_id',
        'status_id',
    ];

    public function status(): BelongsTo
    {
        return $this->belongsTo(Status::class);
    }

    public function customer(): BelongsTo
    {
        return $this->belongsTo(Customer::class);
    }
}
