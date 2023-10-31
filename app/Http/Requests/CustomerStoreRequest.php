<?php

namespace App\Http\Requests;

use App\Models\Customer;
use Illuminate\Foundation\Http\FormRequest;

class CustomerStoreRequest extends FormRequest
{
    public function authorize()
    {
        return $this->user()->can('create', Customer::class);
    }

    public function rules()
    {
        return [
            //
        ];
    }
}
