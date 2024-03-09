"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import signUp from "@/firebase/auth/signup";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleSignUp = async (event: any) => {
    event.preventDefault();
    try {
      const { result, error } = await signUp(email, password);
      if (error) {
        console.log(error);
        setErrorMessage("Error during Sign Up. Please try again");
        return;
      }
      router.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md w-full">
        <h2 className="text-2xl mb-4 text-center uppercase font-extrabold">
          Sign Up
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
              autoComplete="off"
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
              autoComplete="off"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="role" className="block mb-1">
              Role:
            </label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
            >
              <option value="user">User</option>
              <option value="moderator">Moderator</option>
            </select>
          </div>
          <p className="mb-[0.5rem]">
            Already have an acount?{" "}
            <Link href={"/"} className=" font-extrabold text-[#6d2bbf]">
              Login
            </Link>
          </p>
          <button
            type="submit"
            onClick={handleSignUp}
            className="w-full bg-[#6d2bbf] text-white py-2 rounded hover:bg-[#6e2bbfc7] transition duration-200"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
