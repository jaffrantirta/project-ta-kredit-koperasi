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
        $validatedData = $request->validated();

        $criteriaId = $validatedData['criteria_id'];
        $customerCreditId = $validatedData['customer_credit_id'];

        CustomerCreditAssignWeight::updateOrCreate(
            ['criteria_id' => $criteriaId, 'customer_credit_id' => $customerCreditId],
            $validatedData
        );

        return redirect()->back();
    }

    public function show($customercreditassignweight, CustomerCreditAssignWeightQuery $query)
    {
        return $query->includes()->findAndAppend($customercreditassignweight);
    }

    public function update(CustomerCreditAssignWeightUpdateRequest $request, CustomerCreditAssignWeight $assign_weight)
    {
        $assign_weight->update($request->validated());
        return redirect()->back();
    }

    public function destroy(CustomerCreditAssignWeight $customercreditassignweight)
    {
        $customercreditassignweight->delete();
        return response()->noContent();
    }
}
