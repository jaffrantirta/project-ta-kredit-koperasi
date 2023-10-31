<?php

namespace App\Http\Controllers;

use App\Http\Requests\CustomerCreditStoreRequest;
use App\Http\Requests\CustomerCreditUpdateRequest;
use App\Models\CustomerCredit;
use App\Queries\CustomerCreditQuery;

class CustomerCreditController extends Controller
{
    public function index(CustomerCreditQuery $customercreditQuery)
    {
        return $customercreditQuery->includes()->filterSortPaginateWithAppend();
    }

    public function store(CustomerCreditStoreRequest $request)
    {
        return CustomerCredit::create($request->validated());
    }

    public function show($customercredit, CustomerCreditQuery $query)
    {
        return $query->includes()->findAndAppend($customercredit);
    }

    public function update(CustomerCreditUpdateRequest $request, CustomerCredit $customercredit)
    {
        $customercredit->update($request->validated());
        return $customercredit;
    }

    public function destroy(CustomerCredit $customercredit)
    {
        $customercredit->delete();
        return response()->noContent();
    }
}
