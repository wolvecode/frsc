<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class LoginController extends Controller
{
    //Redirect to dashboard if user is already login
    public function __construct()
    {
        $this->middleware(['guest']);
    }

    //view user login
    public function index()
    {
        return view('auth.login');
    }

    //log user in
    public function  store(Request  $request)
    {
        $credentials = $request->only('email', 'password');

        if (auth()->attempt($credentials)) {
            return $request->expectsJson()
                ? response()->json(['message' => 'Login successful', 'nextURL' => route('home')], Response::HTTP_OK)
                : redirect()->route('home');
        }

        return $request->expectsJson()
            ? response()->json(['message' => 'Email or password is incorrect'], Response::HTTP_BAD_REQUEST)
            : back()->with(['status' => '400','message' => 'Invalid login details']);
    }

}
