<?php

namespace App\Policies;

use App\Models\Status;
use App\Models\User;

class StatusPolicy
{
    public function viewAny(User $user)
    {
        return $user->can('status.viewAny');
    }

    public function view(User $user, Status $status)
    {
        return $user->can('status.view');
    }

    public function create(User $user)
    {
        return $user->can('status.create');
    }

    public function update(User $user, Status $status)
    {
        return $user->can('status.update');
    }

    public function delete(User $user, Status $status)
    {
        return $user->can('status.delete');
    }
}
