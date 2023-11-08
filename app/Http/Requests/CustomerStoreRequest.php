<?php

namespace App\Http\Requests;

use App\Models\Customer;
use Illuminate\Foundation\Http\FormRequest;
use App\Enums\GenderEnum;
use Illuminate\Validation\Rules\Enum;

class CustomerStoreRequest extends FormRequest
{
    public function authorize()
    {
        return $this->user()->can('create-customer', Customer::class);
    }

    public function rules()
    {
        return [
            'name' =>   'string|required',
            'nik' => 'numeric|required',
            'phone' => 'numeric|required',
            'email' => 'email|required',
            'gender' => [new Enum(GenderEnum::class), 'required'],
            'birthday' => 'date|required',
            'occupotion' => 'string|required',
            'address' => 'string|required',
        ];
    }
}
