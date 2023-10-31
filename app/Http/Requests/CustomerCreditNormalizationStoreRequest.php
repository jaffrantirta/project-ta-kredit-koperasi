<?php

namespace App\Http\Requests;

use App\Models\CustomerCreditNormalization;
use Illuminate\Foundation\Http\FormRequest;

class CustomerCreditNormalizationStoreRequest extends FormRequest
{
    public function authorize()
    {
        return $this->user()->can('create', CustomerCreditNormalization::class);
    }

    public function rules()
    {
        return [
            //
        ];
    }
}
