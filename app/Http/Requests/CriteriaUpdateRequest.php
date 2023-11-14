<?php

namespace App\Http\Requests;

use App\Models\Criteria;
use Illuminate\Foundation\Http\FormRequest;

class CriteriaUpdateRequest extends FormRequest
{
    public function authorize()
    {
        return $this->user()->can('update-criteria', $this->route('criteria'));
    }

    public function rules()
    {
        return [
            'name' => ['string', 'max:255'],
            'weight' => ['numeric']
        ];
    }
}
