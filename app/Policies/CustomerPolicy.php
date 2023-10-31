<?php

namespace App\Policies;

use App\Models\Customer;
use App\Models\User;

class CustomerPolicy
{
    public function viewAny(User $user)
    {
        return $user->can('customer.viewAny');
    }

    public function view(User $user, Customer $customer)
    {
        return $user->can('customer.view');
    }

    public function create(User $user)
    {
        return $user->can('customer.create');
    }

    public function update(User $user, Customer $customer)
    {
        return $user->can('customer.update');
    }

    public function delete(User $user, Customer $customer)
    {
        return $user->can('customer.delete');
    }
}
