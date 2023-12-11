<?php

namespace App\Http\Controllers;

use App\Http\Requests\CustomerCreditEvaluateAlternativeStoreRequest;
use App\Http\Requests\CustomerCreditEvaluateAlternativeUpdateRequest;
use App\Models\CustomerCreditEvaluateAlternative;
use App\Queries\CustomerCreditEvaluateAlternativeQuery;
use Inertia\Inertia;
use Inertia\Response;

class CustomerCreditEvaluateAlternativeController extends Controller
{
    public function index(CustomerCreditEvaluateAlternativeQuery $customercreditevaluatealternativeQuery)
    {
        return $customercreditevaluatealternativeQuery->includes()->filterSortPaginateWithAppend();
    }

    public function create()
    {
        return Inertia::render('Customer/Credit/EvaluateAlternative/Create');
    }

    public function store(CustomerCreditEvaluateAlternativeStoreRequest $request)
    {
        $validatedData = $request->validated();

        $criteriaId = $validatedData['criteria_id'];
        $customerCreditId = $validatedData['customer_credit_id'];

        CustomerCreditEvaluateAlternative::updateOrCreate(
            ['criteria_id' => $criteriaId, 'customer_credit_id' => $customerCreditId],
            $validatedData
        );

        return redirect()->back();
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
