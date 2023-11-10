<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;
use App\Http\Requests\Auth\RegisterRequest;
use Illuminate\Support\Facades\DB;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    public function store(RegisterRequest $request)
    {
        DB::beginTransaction();
        $user = User::create($request->validated('user'));
        if ($request->validated('customer') != null)
            $user->customer()->create($request->validated('customer'));
        if ($request->isCustomer)
            $user->assignRole('customer');
        DB::commit();

        event(new Registered($user));

        return redirect()->back();
    }
}
