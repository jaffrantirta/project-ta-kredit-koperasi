<?php

namespace App\Http\Requests;

use App\Enums\CreditWeightValue;
use App\Models\CustomerCreditAssignWeight;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Enum;

class CustomerCreditAssignWeightUpdateRequest extends FormRequest
{
    public function authorize()
    {
        return $this->user()->can('customercreditassignweight.update', $this->route('customercreditassiassgnweight'));
    }

    public function rules()
    {
        return [
            'value' => ['required', new Enum(CreditWeightValue::class)]
        ];
    }
}
