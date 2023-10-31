<?php

namespace App\Policies;

use App\Models\CustomerCredit;
use App\Models\User;

class CustomerCreditPolicy
{
    public function viewAny(User $user)
    {
        return $user->can('customercredit.viewAny');
    }

    public function view(User $user, CustomerCredit $customercredit)
    {
        return $user->can('customercredit.view');
    }

    public function create(User $user)
    {
        return $user->can('customercredit.create');
    }

    public function update(User $user, CustomerCredit $customercredit)
    {
        return $user->can('customercredit.update');
    }

    public function delete(User $user, CustomerCredit $customercredit)
    {
        return $user->can('customercredit.delete');
    }
}
