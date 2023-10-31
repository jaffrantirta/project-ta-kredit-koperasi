<?php

namespace App\Http\Requests;

use App\Models\CustomerCreditAssignWeight;
use Illuminate\Foundation\Http\FormRequest;

class CustomerCreditAssignWeightUpdateRequest extends FormRequest
{
    public function authorize()
    {
        return $this->user()->can('update', $this->route('customercreditassignweight'));
    }

    public function rules()
    {
        return [
            //
        ];
    }
}
