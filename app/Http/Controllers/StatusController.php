<?php

namespace App\Http\Controllers;

use App\Http\Requests\StatusStoreRequest;
use App\Http\Requests\StatusUpdateRequest;
use App\Models\Status;
use App\Queries\StatusQuery;
use Inertia\Inertia;
use Inertia\Response;

class StatusController extends Controller
{
    public function index(StatusQuery $statusQuery)
    {
        $data['statuses'] = $statusQuery->includes()->filterSortPaginateWithAppend();
        return Inertia::render('Status/List', $data);
    }

    public function create()
    {
        return Inertia::render('Status/Create');
    }

    public function store(StatusStoreRequest $request)
    {
        Status::create($request->validated());
        return redirect()->back();
    }

    public function show($status, StatusQuery $query)
    {
        $data['status'] = $query->includes()->findAndAppend($status);
        return Inertia::render('Status/Show', $data);
    }

    public function edit($status, StatusQuery $query)
    {
        $data['status'] = $query->includes()->findAndAppend($status);
        return Inertia::render('Status/Create', $data);
    }

    public function update(StatusUpdateRequest $request, Status $status)
    {
        $status->update($request->validated());
        return redirect()->route('status.show', ['status' => $status->id]);
    }

    public function destroy(Status $status)
    {
        $status->delete();
        return redirect()->back();
    }
}
