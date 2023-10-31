<?php

namespace App\Policies;

use App\Models\CustomerCreditAssignWeight;
use App\Models\User;

class CustomerCreditAssignWeightPolicy
{
    public function viewAny(User $user)
    {
        return $user->can('customercreditassignweight.viewAny');
    }

    public function view(User $user, CustomerCreditAssignWeight $customercreditassignweight)
    {
        return $user->can('customercreditassignweight.view');
    }

    public function create(User $user)
    {
        return $user->can('customercreditassignweight.create');
    }

    public function update(User $user, CustomerCreditAssignWeight $customercreditassignweight)
    {
        return $user->can('customercreditassignweight.update');
    }

    public function delete(User $user, CustomerCreditAssignWeight $customercreditassignweight)
    {
        return $user->can('customercreditassignweight.delete');
    }
}
