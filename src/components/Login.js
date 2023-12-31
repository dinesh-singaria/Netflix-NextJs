import React from "react";
import Logo from "./Logo";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className="login_bg_gradient bg-cover h-screen grid place-items-center">
      <Logo style="w-52 absolute top-0 left-0 m-8" />
      <div className="bg-[rgba(0,0,0,0.75)] p-10 w-80 space-y-6">
        <h2 className="text-3xl font-medium">Sign In</h2>

        <button
          onClick={() => signIn("google")}
          className="bg-white text-black flex gap-2 items-center p-4 text-xl"
        >
          <FcGoogle className="text-3xl" />
          Sign In With Google
        </button>
      </div>
    </div>
  );
};

export default Login;
