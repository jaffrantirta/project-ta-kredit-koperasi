<?php

namespace App\Http\Controllers;

use App\Http\Requests\CustomerCreditNormalizationStoreRequest;
use App\Http\Requests\CustomerCreditNormalizationUpdateRequest;
use App\Models\CustomerCreditNormalization;
use App\Queries\CustomerCreditNormalizationQuery;

class CustomerCreditNormalizationController extends Controller
{
    public function index(CustomerCreditNormalizationQuery $customercreditnormalizationQuery)
    {
        return $customercreditnormalizationQuery->includes()->filterSortPaginateWithAppend();
    }

    public function store(CustomerCreditNormalizationStoreRequest $request)
    {
        return CustomerCreditNormalization::create($request->validated());
    }

    public function show($customercreditnormalization, CustomerCreditNormalizationQuery $query)
    {
        return $query->includes()->findAndAppend($customercreditnormalization);
    }

    public function update(CustomerCreditNormalizationUpdateRequest $request, CustomerCreditNormalization $customercreditnormalization)
    {
        $customercreditnormalization->update($request->validated());
        return $customercreditnormalization;
    }

    public function destroy(CustomerCreditNormalization $customercreditnormalization)
    {
        $customercreditnormalization->delete();
        return response()->noContent();
    }
}
