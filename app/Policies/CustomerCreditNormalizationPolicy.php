<?php

namespace App\Policies;

use App\Models\CustomerCreditNormalization;
use App\Models\User;

class CustomerCreditNormalizationPolicy
{
    public function viewAny(User $user)
    {
        return $user->can('customercreditnormalization.viewAny');
    }

    public function view(User $user, CustomerCreditNormalization $customercreditnormalization)
    {
        return $user->can('customercreditnormalization.view');
    }

    public function create(User $user)
    {
        return $user->can('customercreditnormalization.create');
    }

    public function update(User $user, CustomerCreditNormalization $customercreditnormalization)
    {
        return $user->can('customercreditnormalization.update');
    }

    public function delete(User $user, CustomerCreditNormalization $customercreditnormalization)
    {
        return $user->can('customercreditnormalization.delete');
    }
}
