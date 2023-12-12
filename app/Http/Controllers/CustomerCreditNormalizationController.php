<?php

namespace App\Http\Controllers;

use App\Http\Requests\CustomerCreditNormalizationStoreRequest;
use App\Http\Requests\CustomerCreditNormalizationUpdateRequest;
use App\Models\Criteria;
use App\Models\CustomerCreditEvaluateAlternative;
use App\Models\CustomerCreditNormalization;
use App\Queries\CustomerCreditNormalizationQuery;
use Illuminate\Http\Request;

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

    public function summary(Request $request)
    {
        $criterias = Criteria::all();
        $results = array();

        foreach ($criterias as $key => $value) {
            $max = CustomerCreditEvaluateAlternative::where('criteria_id', $value->id)->max('value');
            $alternative = CustomerCreditEvaluateAlternative::where('customer_credit_id', $request->customer_credit_id)->where('criteria_id', $value->id)->first();

            // dd($alternative);
            $result = $alternative->value / $max;
            $results[] = $result;
        }

        return $results;
    }
}
