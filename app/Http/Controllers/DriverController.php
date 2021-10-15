<?php

namespace App\Http\Controllers;

use App\Models\Driver;
use App\Models\DriverContact;
use App\Models\DriversContact;
use App\Models\DriversUpload;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class DriverController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = Driver::all();
        return response()->json(['data' => $data]);
    }

    public function offense(Request $request)
    {
        $request->validate(['id' => 'required']);

        $data = Driver::find($request->id)->offenses->count();


        return response()->json(['data' => $data]);
    }


    public function picture(Request $request)
    {
        $request->validate(['id' => 'required']);

        $data = Driver::find(4)->picture->passport;

        return response()->json(['data' => $data]);
    }


    public function search(Request $request)
    {
        // Get the search value from the request
        $search = $request->input('search');
        // Search in the surname, lastName and firstName and body columns from the drivers table
        $drivers = Driver::query()
            ->where('surname', 'LIKE', '%'.$search.'%')
            ->orWhere('firstName', 'LIKE', '%'.$search.'%')
            ->orWhere('lastName', 'LIKE', '%'.$search.'%')
            ->get();
        // Return the search result
        return response()->json(['message' => 'Search data', 'data' => $drivers], Response::HTTP_OK);
    }


    public function randomDriver()
    {
        $driver = Driver::inRandomOrder()
            ->limit(1)
            ->get();
        return response()->json(['message' => 'Search data', 'data' => $driver], Response::HTTP_OK);

    }
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $driver = $request->validate([
            'surname' => 'required',
            'firstname' => 'required',
            'lastname' => 'required',
            'email' => 'required|unique:drivers',
            'phone' => 'required',
            'gender' => 'required',
            'nationality' => 'required',
            'state' => 'required',
            'lga' => 'required',
            'birth' => 'required',
            'nin' => 'required',
        ]);

        $data  = Driver::create($driver);

        return $request->expectsJson()
            ? response()->json(['message' => 'Driver information created', 'data' => $data], Response::HTTP_OK)
            : redirect()->route('contact');
    }


    public function contact(Request $request)
    {
        $contact = $request->validate([
            'driver_id' => 'required',
            'address_1' => 'required',
            'city' =>  'required',
            'lga' => 'required',
            'state' => 'required',
            'postal_code' => 'required',
            'address_2' => 'nullable',
            'city_2' => 'nullable',
            'lga_2' => 'nullable',
            'state_2' => 'nullable',
            'postal_code_2' => 'nullable',
        ]);

        $data = DriversContact::create($contact);


        return $request->expectsJson()
            ? response()->json(['message' => 'Driver Contact information created', 'data' => $data], Response::HTTP_OK)
            : redirect()->route('upload');
    }

    public function upload(Request $request)
    {
        $upload = $request->validate([
            'driver_id' => 'required',
            'passport' => 'required',
            'left_thumb' => 'required',
            'right_thumb' => 'required',
        ]);

        $data = DriversUpload::create($upload);

        return  response()->json(['message' => 'Driver picture uploaded', 'data' => $data], Response::HTTP_OK);
    }

    /**
     * Display the specified resource.
     *
     */
    public function show()
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit()
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy()
    {
        //
    }
}
