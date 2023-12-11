<?php

namespace App\Http\Controllers;

use App\Enums\CreditWeightValue;
use App\Http\Requests\CustomerCreditStoreRequest;
use App\Http\Requests\CustomerCreditUpdateRequest;
use App\Models\Criteria;
use App\Models\Customer;
use App\Models\CustomerCredit;
use App\Queries\CustomerCreditQuery;
use Inertia\Inertia;
use Inertia\Response;

class CustomerCreditController extends Controller
{
    public function index(CustomerCreditQuery $customercreditQuery)
    {
        $data['customer_credits'] = $customercreditQuery->includes()->filterSortPaginateWithAppend();
        return Inertia::render('Customer/Credit/List', $data);
    }

    public function create()
    {
        $data['customer'] = Customer::with('user')->find(request('customer_id'));
        $data['customers'] = Customer::with('user')->get();
        return Inertia::render('Customer/Credit/Create', $data);
    }

    public function store(CustomerCreditStoreRequest $request)
    {
        CustomerCredit::create($request->validated());
        return redirect()->back();
    }

    public function show($customercredit, CustomerCreditQuery $query)
    {
        $data['credit'] = $query->includes()->findAndAppend($customercredit);
        $data['criterias'] = Criteria::all();
        return Inertia::render('Customer/Credit/Show', $data);
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
