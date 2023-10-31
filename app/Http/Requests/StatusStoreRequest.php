<?php

namespace App\Http\Requests;

use App\Models\Status;
use Illuminate\Foundation\Http\FormRequest;

class StatusStoreRequest extends FormRequest
{
    public function authorize()
    {
        return $this->user()->can('create', Status::class);
    }

    public function rules()
    {
        return [
            //
        ];
    }
}
