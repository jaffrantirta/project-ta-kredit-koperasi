<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Criteria extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'name',
        'weight'
    ];

    public function getWeightSummaryAttribute()
    {
        return number_format($this->sum('weight'), 1);
    }
}
