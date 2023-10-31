<?php

namespace App\Http\Controllers;

use App\Http\Requests\CriteriaStoreRequest;
use App\Http\Requests\CriteriaUpdateRequest;
use App\Models\Criteria;
use App\Queries\CriteriaQuery;

class CriteriaController extends Controller
{
    public function index(CriteriaQuery $criteriaQuery)
    {
        return $criteriaQuery->includes()->filterSortPaginateWithAppend();
    }

    public function store(CriteriaStoreRequest $request)
    {
        return Criteria::create($request->validated());
    }

    public function show($criteria, CriteriaQuery $query)
    {
        return $query->includes()->findAndAppend($criteria);
    }

    public function update(CriteriaUpdateRequest $request, Criteria $criteria)
    {
        $criteria->update($request->validated());
        return $criteria;
    }

    public function destroy(Criteria $criteria)
    {
        $criteria->delete();
        return response()->noContent();
    }
}
