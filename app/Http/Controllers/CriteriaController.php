<?php

namespace App\Http\Controllers;

use App\Http\Requests\CriteriaStoreRequest;
use App\Http\Requests\CriteriaUpdateRequest;
use App\Models\Criteria;
use App\Queries\CriteriaQuery;
use Inertia\Inertia;
use Inertia\Response;

class CriteriaController extends Controller
{
    public function index(CriteriaQuery $criteriaQuery)
    {
        $data['criterias'] = $criteriaQuery->includes()->filterSortPaginateWithAppend();
        return Inertia::render('Criteria/List', $data);
    }

    public function create()
    {
        return Inertia::render('Criteria/Create');
    }

    public function store(CriteriaStoreRequest $request)
    {
        Criteria::create($request->validated());
        return redirect()->back();
    }

    public function show($criteria, CriteriaQuery $query)
    {
        $data['criteria'] = $query->includes()->findAndAppend($criteria);
        return Inertia::render('Criteria/Show', $data);
    }

    public function edit($criteria, CriteriaQuery $query)
    {
        $data['criteria'] = $query->includes()->findAndAppend($criteria);
        return Inertia::render('Criteria/Create', $data);
    }

    public function update(CriteriaUpdateRequest $request, Criteria $criterion)
    {
        $criterion->update($request->validated());
        return redirect()->route('criteria.show', ['criterion' => $criterion->id]);
    }

    public function destroy(Criteria $criterion)
    {
        $criterion->delete();
        return redirect()->back();
    }
}
