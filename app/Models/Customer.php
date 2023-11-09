<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Enums\GenderEnum;

class Customer extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'nik',
        'phone',
        'birthday',
        'gender',
        'address',
        'occupation',
    ];

    protected $casts = [
        'gender' => GenderEnum::class,
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
