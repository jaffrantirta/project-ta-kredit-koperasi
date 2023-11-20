<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use \Illuminate\Database\Eloquent\Relations\BelongsTo;
use \Illuminate\Database\Eloquent\Relations\HasMany;

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
        return $this->belongsTo(Customer::class)->with('user');
    }

    public function customerCreditAssignWeights(): HasMany
    {
        return $this->hasMany(CustomerCreditAssignWeight::class)->with('criteria');
    }

    public function customerCreditEvaluateAlternatives(): HasMany
    {
        return $this->hasMany(CustomerCreditEvaluateAlternative::class)->with('criteria');
    }

    public function customerCreditNormalizations(): HasMany
    {
        return $this->hasMany(CustomerCreditNormalization::class)->with('criteria');
    }
}
