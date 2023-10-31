<?php

namespace App\Http\Requests;

use App\Models\CustomerCredit;
use Illuminate\Foundation\Http\FormRequest;

class CustomerCreditStoreRequest extends FormRequest
{
    public function authorize()
    {
        return $this->user()->can('create', CustomerCredit::class);
    }

    public function rules()
    {
        return [
            //
        ];
    }
}
