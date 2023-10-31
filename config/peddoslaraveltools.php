<?php
return [
    'available_permissions' => [
        [
            'name' => 'create-customer',
            'roles' => ['super-admin','admin'],
        ],
        [
            'name' => 'update-customer',
            'roles' => ['super-admin','admin'],
        ],
        [
            'name' => 'remove-customer',
            'roles' => ['super-admin'],
        ],
        [
            'name' => 'create-customer-credit',
            'roles' => ['super-admin','admin'],
        ],
        [
            'name' => 'update-customer-credit',
            'roles' => ['super-admin','admin'],
        ],
        [
            'name' => 'remove-customer-credit',
            'roles' => ['super-admin'],
        ],
        [
            'name' => 'create-status',
            'roles' => ['super-admin'],
        ],
        [
            'name' => 'update-status',
            'roles' => ['super-admin'],
        ],
        [
            'name' => 'remove-status',
            'roles' => ['super-admin'],
        ],
        [
            'name' => 'create-criteria',
            'roles' => ['super-admin'],
        ],
        [
            'name' => 'update-criteria',
            'roles' => ['super-admin'],
        ],
        [
            'name' => 'remove-criteria',
            'roles' => ['super-admin'],
        ],
        [
            'name' => 'create-customer-credit-assign-weight',
            'roles' => ['super-admin','admin'],
        ],
        [
            'name' => 'update-customer-credit-assign-weight',
            'roles' => ['super-admin','admin'],
        ],
        [
            'name' => 'remove-customer-credit-assign-weight',
            'roles' => ['super-admin'],
        ],
        [
            'name' => 'create-customer-credit-normalization',
            'roles' => ['super-admin','admin'],
        ],
        [
            'name' => 'update-customer-credit-normalization',
            'roles' => ['super-admin','admin'],
        ],
        [
            'name' => 'remove-customer-credit-normalization',
            'roles' => ['super-admin'],
        ],
        [
            'name' => 'create-customer-credit-evaluate_alternative',
            'roles' => ['super-admin','admin'],
        ],
        [
            'name' => 'update-customer-credit-evaluate_alternative',
            'roles' => ['super-admin','admin'],
        ],
        [
            'name' => 'remove-customer-credit-evaluate_alternative',
            'roles' => ['super-admin'],
        ],
        [
            'name' => 'assign-role',
            'roles' => ['super-admin'],
        ],
        [
            'name' => 'revoke-role',
            'roles' => ['super-admin'],
        ],
    ],
    'max_login_attempt' => 3,
];
