<?php

namespace App\Queries;

use App\Models\CustomerCreditNormalization;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\AllowedInclude;
use Spatie\QueryBuilder\AllowedSort;
use Dwikipeddos\PeddosLaravelTools\Queries\PaginatedQuery;

class CustomerCreditNormalizationQuery extends PaginatedQuery
{
    public function __construct()
    {
        parent::__construct(CustomerCreditNormalization::query());
    }

    protected array $append = [
       //'phone',
    ];

    protected string $adminPermission = 'customercreditnormalization.view-sensitive-data';

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