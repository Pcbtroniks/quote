<?php

namespace App\Repositories\Providers;

use App\Http\Requests\StoreProviderRequest;
use App\Models\Provider as ProviderModel;

class Provider {


    public function getProviders(int $limit = 5){

        return ProviderModel::paginate($limit);

    }

    public function getAllProviders(array $columns = ['name', 'id']){

        return ProviderModel::select($columns)->get();

    }

    public function store(StoreProviderRequest $request){

        return ProviderModel::create( $request->validated() );

    }

    public function switchStatus($providerID, $status){

        return ProviderModel::where('id', $providerID)
                            ->update(['status' => $status]);

    }

    public  function update(){}

    public function delete($providerID){

        return ProviderModel::destroy($providerID);

    }

}