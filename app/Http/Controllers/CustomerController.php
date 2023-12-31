<?php

namespace App\Http\Controllers;

use App\Http\Requests\CustomerStoreRequest;
use App\Http\Requests\CustomerUpdateRequest;
use App\Models\Customer;
use App\Queries\CustomerQuery;
use Inertia\Inertia;
use Inertia\Response;

class CustomerController extends Controller
{
    public function index(CustomerQuery $customerQuery)
    {
        $data['customers'] = $customerQuery->includes()->filterSortPaginateWithAppend();
        return Inertia::render('Customer/List', $data);
    }

    public function create()
    {
        return Inertia::render('Customer/Create');
    }

    public function store(CustomerStoreRequest $request)
    {
        return Customer::create($request->validated());
    }

    public function show($customer, CustomerQuery $query)
    {
        $data['customer'] = $query->includes()->findAndAppend($customer);
        return Inertia::render('Customer/Show', $data);
    }

    public function update(CustomerUpdateRequest $request, Customer $customer)
    {
        $customer->update($request->validated());
        return $customer;
    }

    public function destroy(Customer $customer)
    {
        $customer->delete();
        return redirect()->back();
    }
}
