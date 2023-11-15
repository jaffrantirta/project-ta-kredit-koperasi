<?php
return [
    'available_permissions' => [
        //customer
        [
            'name' => 'customer.viewAny',
            'roles' => ['super-admin','admin','customer'],
        ],
        [
            'name' => 'customer.view',
            'roles' => ['super-admin','admin','customer'],
        ],
        [
            'name' => 'customer.create',
            'roles' => ['super-admin','admin'],
        ],
        [
            'name' => 'customer.update',
            'roles' => ['super-admin','admin','customer'],
        ],
        [
            'name' => 'customer.delete',
            'roles' => ['super-admin'],
        ],

        //customer credit
        [
            'name' => 'customercredit.viewAny',
            'roles' => ['super-admin','admin','customer'],
        ],
        [
            'name' => 'customercredit.view',
            'roles' => ['super-admin','admin','customer'],
        ],
        [
            'name' => 'customercredit.create',
            'roles' => ['super-admin','admin'],
        ],
        [
            'name' => 'customercredit.update',
            'roles' => ['super-admin','admin'],
        ],
        [
            'name' => 'customercredit.delete',
            'roles' => ['super-admin'],
        ],

        //status
        [
            'name' => 'status.viewAny',
            'roles' => ['super-admin','admin','customer'],
        ],
        [
            'name' => 'status.view',
            'roles' => ['super-admin','admin','customer'],
        ],
        [
            'name' => 'status.create',
            'roles' => ['super-admin'],
        ],
        [
            'name' => 'status.update',
            'roles' => ['super-admin'],
        ],
        [
            'name' => 'status.delete',
            'roles' => ['super-admin'],
        ],

        //criteria
        [
            'name' => 'criteria.viewAny',
            'roles' => ['super-admin','admin','customer'],
        ],
        [
            'name' => 'criteria.view',
            'roles' => ['super-admin','admin','customer'],
        ],
        [
            'name' => 'criteria.create',
            'roles' => ['super-admin'],
        ],
        [
            'name' => 'criteria.update',
            'roles' => ['super-admin'],
        ],
        [
            'name' => 'criteria.delete',
            'roles' => ['super-admin'],
        ],

        //customer credit assign weight
        [
            'name' => 'customercreditassignweight.viewAny',
            'roles' => ['super-admin','admin','customer'],
        ],
        [
            'name' => 'customercreditassignweight.view',
            'roles' => ['super-admin','admin','customer'],
        ],
        [
            'name' => 'customercreditassignweight.create',
            'roles' => ['super-admin','admin'],
        ],
        [
            'name' => 'customercreditassignweight.update',
            'roles' => ['super-admin','admin'],
        ],
        [
            'name' => 'customercreditassignweight.delete',
            'roles' => ['super-admin'],
        ],

        //customer credit normalization
        [
            'name' => 'customercreditnormalization.viewAny',
            'roles' => ['super-admin','admin','customer'],
        ],
        [
            'name' => 'customercreditnormalization.view',
            'roles' => ['super-admin','admin','customer'],
        ],
        [
            'name' => 'customercreditnormalization.create',
            'roles' => ['super-admin','admin'],
        ],
        [
            'name' => 'customercreditnormalization.update',
            'roles' => ['super-admin','admin'],
        ],
        [
            'name' => 'customercreditnormalization.delete',
            'roles' => ['super-admin'],
        ],

        //customer credit evaluate alternative
        [
            'name' => 'customercreditevaluatealternative.viewAny',
            'roles' => ['super-admin','admin','customer'],
        ],
        [
            'name' => 'customercreditevaluatealternative.view',
            'roles' => ['super-admin','admin','customer'],
        ],
        [
            'name' => 'customercreditevaluatealternative.create',
            'roles' => ['super-admin','admin'],
        ],
        [
            'name' => 'customercreditevaluatealternative.update',
            'roles' => ['super-admin','admin'],
        ],
        [
            'name' => 'customercreditevaluatealternative.remove',
            'roles' => ['super-admin'],
        ],

        //assign role
        [
            'name' => 'role.assign',
            'roles' => ['super-admin'],
        ],

        //revoke role
        [
            'name' => 'role.revoke',
            'roles' => ['super-admin'],
        ],
    ],
    'max_login_attempt' => 3,
];
