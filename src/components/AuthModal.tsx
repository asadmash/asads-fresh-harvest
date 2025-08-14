"use client";
import { useState } from "react";
import { useLoginMutation, useSignupMutation } from "@/features/auth/authApi";
import { useAppDispatch } from "@/hooks/reduxHooks";
import { setToken } from "@/features/auth/authSlice";

export default function AuthModal() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login] = useLoginMutation();
  const [signup] = useSignupMutation();
  const dispatch = useAppDispatch();

  const handleSubmit = async () => {
    try {
      const response = isLogin
        ? await login({ email, password }).unwrap()
        : await signup({ email, password }).unwrap();
      dispatch(setToken(response.token));
    } catch (err) {
      console.error("Auth error:", err);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-xl font-bold mb-4">
          {isLogin ? "Sign In" : "Sign Up"}
        </h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-2 p-2 border"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-2 border"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white py-2 rounded"
        >
          {isLogin ? "Login" : "Sign Up"}
        </button>
        <p className="mt-4 text-sm text-center">
          {isLogin ? "No account?" : "Already have an account?"}{" "}
          <button
            className="text-blue-600 underline"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Sign up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}
