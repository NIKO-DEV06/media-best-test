"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import signIn from "@/firebase/auth/signin";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleSignIn = async (event: any) => {
    event.preventDefault();
    try {
      const { result, error } = await signIn(email, password);
      if (error) {
        console.log(error);
        setErrorMessage("Invalid Login. Please try again");
        return;
      }
      return router.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md w-full">
        <h2 className="text-2xl mb-4 text-center uppercase font-extrabold">
          Sign In
        </h2>
        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1">
              Email:
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-1">
              Password:
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <p className="mb-[0.5rem]">
            Don&apos;t have an acount?{" "}
            <Link href={"/signup"} className=" font-extrabold text-[#6d2bbf]">
              Sign Up Here
            </Link>
          </p>
          <button
            type="submit"
            onClick={handleSignIn}
            className="w-full bg-[#6d2bbf] text-white py-2 rounded hover:bg-[#6e2bbfc7] transition duration-200"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
