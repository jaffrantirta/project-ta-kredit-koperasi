<?php

namespace App\Http\Requests;

use App\Models\CustomerCreditEvaluateAlternative;
use Illuminate\Foundation\Http\FormRequest;

class CustomerCreditEvaluateAlternativeUpdateRequest extends FormRequest
{
    public function authorize()
    {
        return $this->user()->can('update', $this->route('customercreditevaluatealternative'));
    }

    public function rules()
    {
        return [
            //
        ];
    }
}
