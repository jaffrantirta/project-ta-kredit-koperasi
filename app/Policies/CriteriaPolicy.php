<?php

namespace App\Policies;

use App\Models\Criteria;
use App\Models\User;

class CriteriaPolicy
{
    public function viewAny(User $user)
    {
        return $user->can('criteria.viewAny');
    }

    public function view(User $user, Criteria $criteria)
    {
        return $user->can('criteria.view');
    }

    public function create(User $user)
    {
        return $user->can('criteria.create');
    }

    public function update(User $user, Criteria $criteria)
    {
        return $user->can('criteria.update');
    }

    public function delete(User $user, Criteria $criteria)
    {
        return $user->can('criteria.delete');
    }
}
