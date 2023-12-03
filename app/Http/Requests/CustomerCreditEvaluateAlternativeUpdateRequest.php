<?php

namespace App\Http\Requests;

use App\Enums\CreditWeightValue;
use App\Models\CustomerCreditEvaluateAlternative;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Enum;

class CustomerCreditEvaluateAlternativeUpdateRequest extends FormRequest
{
    public function authorize()
    {
        return $this->user()->can('customercreditevaluatealternative.update', $this->route('customercreditevaluatealternative'));
    }

    public function rules()
    {
        return [
            'value' => ['required', new Enum(CreditWeightValue::class)]
        ];
    }
}
