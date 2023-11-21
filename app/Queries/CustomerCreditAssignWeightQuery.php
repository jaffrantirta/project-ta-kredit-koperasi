<?php

namespace App\Queries;

use App\Models\CustomerCreditAssignWeight;
use Dwikipeddos\PeddosLaravelTools\Queries\PaginatedQuery;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\AllowedInclude;
use Spatie\QueryBuilder\AllowedSort;

class CustomerCreditAssignWeightQuery extends PaginatedQuery
{
    public function __construct()
    {
        parent::__construct(CustomerCreditAssignWeight::query());
    }

    protected array $append = [
        // 'value',
    ];

    protected string $adminPermission = 'customercreditassignweight.view-sensitive-data';

    protected function getAllowedSorts(): array
    {
        return [
            AllowedSort::field('created_at'),
        ];
    }

    protected function getAllowedFilters(): array
    {
        return [
            AllowedFilter::partial('name'),
        ];
    }

    protected function getAllowedIncludes(): array
    {
        return [
            // AllowedInclude::relationship('user'),
        ];
    }
}
