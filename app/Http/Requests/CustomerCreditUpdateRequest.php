<?php

namespace App\Http\Requests;

use App\Models\CustomerCredit;
use Illuminate\Foundation\Http\FormRequest;

class CustomerCreditUpdateRequest extends FormRequest
{
    public function authorize()
    {
        return $this->user()->can('update', $this->route('customercredit'));
    }

    public function rules()
    {
        return [
            //
        ];
    }
}
