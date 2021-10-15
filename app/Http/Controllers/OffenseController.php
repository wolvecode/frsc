<?php

namespace App\Http\Controllers;

use App\Models\Driver;
use App\Models\DriverContact;
use App\Models\DriversContact;
use App\Models\Offense;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class OffenseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = Offense::all();
        //return all offense
        return response()->json(['data' => $data]);
    }

    public function search(Request $request)
    {
        // Get the search value from the request
        $search = $request->input('search');
        // Search in the surname, lastName and firstName and body columns from the drivers table
        $offense = Offense::query()
            ->where('id', 'LIKE', '%'.$search.'%')
            ->orWhere('category', 'LIKE', '%'.$search.'%')
            ->orWhere('paid', 'LIKE', '%'.$search.'%')
            ->get();
        // Return the search result
        return response()->json(['message' => 'Search data', 'data' => $offense], Response::HTTP_OK);
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
        $offense = $request->validate([
            'driver_id' => 'required',
            'offense' => 'required',
            'code' => 'required',
            'category' => 'required',
            'penalty' => 'required',
            'location' => 'required',
        ]);

        $data  = Offense::create($offense);

        return $request->expectsJson()
            ? response()->json(['message' => 'Offense Added', 'data' => $data], Response::HTTP_OK)
            : redirect()->route('contact');
    }

}
