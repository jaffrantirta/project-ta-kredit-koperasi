<?php
namespace App\Http\Requests\Auth;

use Illuminate\Auth\Events\Lockout;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;
use Illuminate\Validation\Rules\Password;
use App\Enums\GenderEnum;
use Illuminate\Validation\Rules\Enum;

class RegisterRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'user.name' => ['required', 'string', 'max:255'],
            'user.email' => ['required', 'string', 'email', 'max:255', 'unique:users,email'],
            'user.password' => ['required', 'confirmed', Password::defaults()],

            'customer.user_id' => ['prohibited'],
            'customer.nik' => ['required', 'numeric'],
            'customer.phone' => ['required', 'numeric'],
            'customer.birthday' => ['required', 'before:today'],
            'customer.gender' => [new Enum(GenderEnum::class)],
            'customer.address' => ['required', 'string', 'max:255'],
            'customer.occupation' => ['required', 'string', 'max:255'],
            
            'isCustomer' => ['boolean'],
        ];
    }
}
