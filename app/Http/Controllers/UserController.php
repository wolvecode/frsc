<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{

    public function index()
    {
        //list of data
    }

    public function create(Request $request)
    {
        $data = $request->validate([
            'name'=> 'required|max:255',
            'role' => 'required',
            'email' => 'required|unique:users|email|max:255',
            'password' => 'required|confirmed',
        ]);

        $data['password'] = Hash::make($data['password']);
        // store user
        $user =  User::create($data);

        return back()->with('status', 'User successfully created');
    }


    public function store(Request $request)
    {
        $data = $request->validate([
            'name'=> 'required|max:255',
            'email' => 'required|unique:users|email|max:255',
            'password' => 'required|confirmed',
        ]);

        $data['password'] = Hash::make($data['password']);

        User::create($data);

        return back()->with(['status' => '200', 'message' => 'User is successfully created']);
    }


    public function show(User $user)
    {
        //
    }


    public function edit(User $user, Request $request)
    {
        $data = $request->validate([
            'name'=> 'required|max:255',
            'role' => 'required',
            'email' => 'required|unique:users|email|max:255',
            'password' => 'required|confirmed',
        ]);

        $data['password'] = Hash::make($data['password']);
        // store user
        User::where($user->id)->update($data);

        return back()->with('status', 'User successfully created');
    }


    public function update(Request $request, User $user)
    {
        //
    }


    public function destroy(User $user)
    {
        //
    }
}
