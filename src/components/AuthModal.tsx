"use client";
import { useState } from "react";
import { useLoginMutation, useSignupMutation } from "@/features/auth/authApi";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { setToken, closeAuthModal } from "@/features/auth/authSlice";
import { FiX, FiMail, FiLock, FiUser } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { useRouter } from "next/navigation";

// define props
type AuthModalProps = {
  onClose: () => void;
};

export default function AuthModal({ onClose }: AuthModalProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const [login] = useLoginMutation();
  const [signup] = useSignupMutation();
  const dispatch = useAppDispatch();
  const router = useRouter();

  const { showModal, redirectAfterLogin } = useAppSelector(
    (state) => state.auth
  );

  if (!showModal) return null; // modal hidden

  const handleSubmit = async () => {
    try {
      const payload = isLogin
        ? { email, password }
        : { fullName, email, password };

      const response = isLogin
        ? await login(payload).unwrap()
        : await signup(payload).unwrap();

      dispatch(setToken(response.token));
      onClose();
      if (redirectAfterLogin) {
        router.push(`/products/${redirectAfterLogin}`);
      }
    } catch (err) {
      console.error("Auth error:", err);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white w-full max-w-md rounded-lg shadow-lg relative p-8 animate-fadeIn">
        {/* Close Button */}
        <button
          onClick={() => dispatch(closeAuthModal())}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <FiX size={20} />
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold mb-6">
          {isLogin ? "Login" : "Register"}
        </h2>

        {/* Full Name (only for register) */}
        {!isLogin && (
          <div className="relative mb-3">
            <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Full Name"
              className="w-full pl-10 p-3 border rounded focus:outline-none focus:ring focus:ring-orange-300"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
        )}

        {/* Email */}
        <div className="relative mb-3">
          <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="email"
            placeholder="Email"
            className="w-full pl-10 p-3 border rounded focus:outline-none focus:ring focus:ring-orange-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password */}
        <div className="relative mb-4">
          <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="password"
            placeholder="Password"
            className="w-full pl-10 p-3 border rounded focus:outline-none focus:ring focus:ring-orange-300"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Remember Me & Forgot Password */}
        {isLogin && (
          <div className="flex items-center justify-between text-sm mb-4">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              Remember me
            </label>
            <button className="text-orange-500 hover:underline">
              Forgot Password?
            </button>
          </div>
        )}

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-orange-500 text-white py-3 rounded font-medium hover:bg-orange-600 transition"
        >
          {isLogin ? "Login" : "Register"}
        </button>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-1 border-gray-300" />
          <span className="px-2 text-sm text-gray-500">
            Or {isLogin ? "sign in" : "sign up"} with
          </span>
          <hr className="flex-1 border-gray-300" />
        </div>

        {/* Social Buttons */}
        <div className="flex gap-3">
          <button className="flex-1 border rounded py-2 flex items-center justify-center gap-2 hover:bg-gray-100">
            <FcGoogle size={20} />
            Google
          </button>
          <button className="flex-1 border rounded py-2 flex items-center justify-center gap-2 hover:bg-gray-100 text-blue-600">
            <FaFacebook size={20} />
            Facebook
          </button>
        </div>

        {/* Switch Form */}
        <p className="mt-6 text-center text-sm">
          {isLogin ? "Don’t have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-orange-500 font-medium hover:underline"
          >
            {isLogin ? "Sign up" : "Log in"}
          </button>
        </p>
      </div>
    </div>
  );
}
