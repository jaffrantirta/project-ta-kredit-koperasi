<?php

namespace App\Queries;

use App\Models\Criteria;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\AllowedInclude;
use Spatie\QueryBuilder\AllowedSort;
use Dwikipeddos\PeddosLaravelTools\Queries\PaginatedQuery;

class CriteriaQuery extends PaginatedQuery
{
    public function __construct()
    {
        parent::__construct(Criteria::query());
    }

    protected array $append = [
       'weight_summary',
    ];

    protected string $adminPermission = 'criteria.view-sensitive-data';

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
            //AllowedInclude::relationship('user'),
        ];
    }
}