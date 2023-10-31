<?php

namespace App\Http\Controllers;

use App\Http\Requests\StatusStoreRequest;
use App\Http\Requests\StatusUpdateRequest;
use App\Models\Status;
use App\Queries\StatusQuery;

class StatusController extends Controller
{
    public function index(StatusQuery $statusQuery)
    {
        return $statusQuery->includes()->filterSortPaginateWithAppend();
    }

    public function store(StatusStoreRequest $request)
    {
        return Status::create($request->validated());
    }

    public function show($status, StatusQuery $query)
    {
        return $query->includes()->findAndAppend($status);
    }

    public function update(StatusUpdateRequest $request, Status $status)
    {
        $status->update($request->validated());
        return $status;
    }

    public function destroy(Status $status)
    {
        $status->delete();
        return response()->noContent();
    }
}
