<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProviderRequest;
use App\Repositories\Providers\Provider;
use Illuminate\Http\Request;

class ProviderController extends Controller
{

    public function index(Provider $provider) {

        $providers = $provider->getProviders();
     
        return inertia('Providers/ManageProviders', compact('providers'));
     
    }

    public function store(StoreProviderRequest $request, Provider $provider) {
     
        $provider->store($request);
     
        return back()->banner('Provider added successfully');
    }

    public function switch(Provider $provider, $providerID) {
     
        $provider->switchStatus($providerID, request()->status);
     
        return back()->banner('Provider added successfully');
    }

    public function delete(Provider $provider, $providerID) {
     
        $provider->delete($providerID);
     
    }
}
