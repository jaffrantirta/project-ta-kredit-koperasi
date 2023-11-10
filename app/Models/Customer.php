<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Enums\GenderEnum;
use Illuminate\Database\Eloquent\SoftDeletes;

class Customer extends Model
{
    use HasFactory, SoftDeletes;
    protected $fillable = [
        'user_id',
        'nik',
        'phone',
        'birthday',
        'gender',
        'address',
        'occupation',
    ];

    public function getGenderAttribute($value){
        return GenderEnum::toString($value);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
