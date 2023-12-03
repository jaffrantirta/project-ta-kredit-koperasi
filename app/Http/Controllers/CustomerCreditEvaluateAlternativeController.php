<?php

namespace App\Http\Controllers;

use App\Http\Requests\CustomerCreditEvaluateAlternativeStoreRequest;
use App\Http\Requests\CustomerCreditEvaluateAlternativeUpdateRequest;
use App\Models\CustomerCreditEvaluateAlternative;
use App\Queries\CustomerCreditEvaluateAlternativeQuery;

class CustomerCreditEvaluateAlternativeController extends Controller
{
    public function index(CustomerCreditEvaluateAlternativeQuery $customercreditevaluatealternativeQuery)
    {
        return $customercreditevaluatealternativeQuery->includes()->filterSortPaginateWithAppend();
    }

    public function store(CustomerCreditEvaluateAlternativeStoreRequest $request)
    {
        return CustomerCreditEvaluateAlternative::create($request->validated());
    }

    public function show($customercreditevaluatealternative, CustomerCreditEvaluateAlternativeQuery $query)
    {
        return $query->includes()->findAndAppend($customercreditevaluatealternative);
    }

    public function update(CustomerCreditEvaluateAlternativeUpdateRequest $request, CustomerCreditEvaluateAlternative $evaluate_alternative)
    {
        $evaluate_alternative->update($request->validated());
        return redirect()->back();
    }

    public function destroy(CustomerCreditEvaluateAlternative $customercreditevaluatealternative)
    {
        $customercreditevaluatealternative->delete();
        return response()->noContent();
    }
}
