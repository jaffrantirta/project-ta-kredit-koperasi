<?php

namespace App\Http\Requests;

use App\Models\CustomerCreditEvaluateAlternative;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Enum;

class CustomerCreditEvaluateAlternativeStoreRequest extends FormRequest
{
    public function authorize()
    {
        return $this->user()->can('customercreditevaluatealternative.create', CustomerCreditEvaluateAlternative::class);
    }

    public function rules()
    {
        return [
            'name' => ['required'],
            'value' => ['required', new Enum(CreditWeightValue::class)]
        ];
    }
}
