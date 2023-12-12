<?php

namespace App\Http\Requests;

use App\Enums\CreditWeightValue;
use App\Models\CustomerCreditAssignWeight;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Enum;

class CustomerCreditAssignWeightStoreRequest extends FormRequest
{
    public function authorize()
    {
        return $this->user()->can('create', CustomerCreditAssignWeight::class);
    }

    public function rules()
    {
        return [
            'criteria_id' => ['required', 'exists:criterias,id'],
            'customer_credit_id' => ['required', 'exists:customer_credits,id'],
            'value' => ['required', new Enum(CreditWeightValue::class)]
        ];
    }
}
