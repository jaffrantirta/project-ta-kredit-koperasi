<?php

namespace App\Http\Controllers;

use App\Http\Requests\CustomerStoreRequest;
use App\Http\Requests\CustomerUpdateRequest;
use App\Models\Customer;
use App\Queries\CustomerQuery;

class CustomerController extends Controller
{
    public function index(CustomerQuery $customerQuery)
    {
        return $customerQuery->includes()->filterSortPaginateWithAppend();
    }

    public function store(CustomerStoreRequest $request)
    {
        return Customer::create($request->validated());
    }

    public function show($customer, CustomerQuery $query)
    {
        return $query->includes()->findAndAppend($customer);
    }

    public function update(CustomerUpdateRequest $request, Customer $customer)
    {
        $customer->update($request->validated());
        return $customer;
    }

    public function destroy(Customer $customer)
    {
        $customer->delete();
        return response()->noContent();
    }
}
