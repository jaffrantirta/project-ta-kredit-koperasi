<?php

namespace App\Http\Controllers;

use App\Http\Requests\CustomerCreditAssignWeightStoreRequest;
use App\Http\Requests\CustomerCreditAssignWeightUpdateRequest;
use App\Models\CustomerCreditAssignWeight;
use App\Queries\CustomerCreditAssignWeightQuery;

class CustomerCreditAssignWeightController extends Controller
{
    public function index(CustomerCreditAssignWeightQuery $customercreditassignweightQuery)
    {
        return $customercreditassignweightQuery->includes()->filterSortPaginateWithAppend();
    }

    public function store(CustomerCreditAssignWeightStoreRequest $request)
    {
        return CustomerCreditAssignWeight::create($request->validated());
    }

    public function show($customercreditassignweight, CustomerCreditAssignWeightQuery $query)
    {
        return $query->includes()->findAndAppend($customercreditassignweight);
    }

    public function update(CustomerCreditAssignWeightUpdateRequest $request, CustomerCreditAssignWeight $customercreditassignweight)
    {
        $customercreditassignweight->update($request->validated());
        return $customercreditassignweight;
    }

    public function destroy(CustomerCreditAssignWeight $customercreditassignweight)
    {
        $customercreditassignweight->delete();
        return response()->noContent();
    }
}
