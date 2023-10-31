<?php

namespace App\Http\Requests;

use App\Models\CustomerCreditNormalization;
use Illuminate\Foundation\Http\FormRequest;

class CustomerCreditNormalizationUpdateRequest extends FormRequest
{
    public function authorize()
    {
        return $this->user()->can('update', $this->route('customercreditnormalization'));
    }

    public function rules()
    {
        return [
            //
        ];
    }
}
