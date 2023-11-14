<?php

namespace App\Http\Requests;

use App\Models\Criteria;
use Illuminate\Foundation\Http\FormRequest;

class CriteriaStoreRequest extends FormRequest
{
    public function authorize()
    {
        return $this->user()->can('create-criteria', Criteria::class);
    }

    public function rules()
    {
        return [
            'name' => ['string', 'max:255'],
            'weight' => ['numeric']
        ];
    }
}
