<?php

namespace App\Policies;

use App\Models\CustomerCreditEvaluateAlternative;
use App\Models\User;

class CustomerCreditEvaluateAlternativePolicy
{
    public function viewAny(User $user)
    {
        return $user->can('customercreditevaluatealternative.viewAny');
    }

    public function view(User $user, CustomerCreditEvaluateAlternative $customercreditevaluatealternative)
    {
        return $user->can('customercreditevaluatealternative.view');
    }

    public function create(User $user)
    {
        return $user->can('customercreditevaluatealternative.create');
    }

    public function update(User $user, CustomerCreditEvaluateAlternative $customercreditevaluatealternative)
    {
        return $user->can('customercreditevaluatealternative.update');
    }

    public function delete(User $user, CustomerCreditEvaluateAlternative $customercreditevaluatealternative)
    {
        return $user->can('customercreditevaluatealternative.delete');
    }
}
