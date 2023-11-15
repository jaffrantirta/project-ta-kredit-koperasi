<?php

namespace App\Http\Requests;

use App\Models\Status;
use Illuminate\Foundation\Http\FormRequest;

class StatusUpdateRequest extends FormRequest
{
    public function authorize()
    {
        return $this->user()->can('update', $this->route('status'));
    }

    public function rules()
    {
        return [
            'name' => ['string', 'required', 'max:255'],
            'minimum_value' => ['numeric', 'required', 'max:1', 'min:0']
        ];
    }
}
