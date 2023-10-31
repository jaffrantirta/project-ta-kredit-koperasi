<?php

namespace App\Queries;

use App\Models\CustomerCreditAssignWeight;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\AllowedInclude;
use Spatie\QueryBuilder\AllowedSort;
use Dwikipeddos\PeddosLaravelTools\Queries\PaginatedQuery;

class CustomerCreditAssignWeightQuery extends PaginatedQuery
{
    public function __construct()
    {
        parent::__construct(CustomerCreditAssignWeight::query());
    }

    protected array $append = [
       //'phone',
    ];

    protected string $adminPermission = 'customercreditassignweight.view-sensitive-data';

    protected function getAllowedSorts(): array
    {
        return [
            //AllowedSort::field('created_at'),
        ];
    }

    protected function getAllowedFilters(): array
    {
        return [
            //AllowedFilter::partial('name'),
        ];
    }

    protected function getAllowedIncludes(): array
    {
        return [
            //AllowedInclude::relationship('user'),
        ];
    }
}