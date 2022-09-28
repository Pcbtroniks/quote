<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
<<<<<<< HEAD
=======
use App\Http\Requests\Category\StoreRequest;
use App\Models\Category;
>>>>>>> 7fa1e998dcd0b4e2b949a8f0b144001fe48c4717
use Illuminate\Http\Request;

class CategoryController extends Controller
{
<<<<<<< HEAD
    //
=======

    public function index()
    {
        return 'Categories';
    }

    public function create(){
        
        return inertia('Dashboard/Category/Create');

    }

    public function store(StoreRequest $request){

        Category::create( $request->validated() );
    
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
>>>>>>> 7fa1e998dcd0b4e2b949a8f0b144001fe48c4717
}
