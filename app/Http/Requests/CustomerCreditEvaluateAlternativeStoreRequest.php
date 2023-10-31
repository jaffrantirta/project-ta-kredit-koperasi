<?php

namespace App\Http\Requests;

use App\Models\CustomerCreditEvaluateAlternative;
use Illuminate\Foundation\Http\FormRequest;

class CustomerCreditEvaluateAlternativeStoreRequest extends FormRequest
{
    public function authorize()
    {
        return $this->user()->can('create', CustomerCreditEvaluateAlternative::class);
    }

    public function rules()
    {
        return [
            //
        ];
    }
}
