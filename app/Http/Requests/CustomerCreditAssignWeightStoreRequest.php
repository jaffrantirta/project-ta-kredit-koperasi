<?php

namespace App\Http\Requests;

use App\Models\CustomerCreditAssignWeight;
use Illuminate\Foundation\Http\FormRequest;

class CustomerCreditAssignWeightStoreRequest extends FormRequest
{
    public function authorize()
    {
        return $this->user()->can('create', CustomerCreditAssignWeight::class);
    }

    public function rules()
    {
        return [
            //
        ];
    }
}
