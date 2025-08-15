"use client";

import { useAppSelector, useAppDispatch } from "@/hooks/reduxHooks";
import { openAuthModal } from "@/features/auth/authSlice";
import { signOut, useSession } from "next-auth/react";

export default function HeaderAuthButton() {
  const { data: session, status } = useSession();
  const dispatch = useAppDispatch();

  if (status === "loading") return null;

  return session ? (
    <button
      onClick={() => signOut({ callbackUrl: "/" })}
      className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition"
    >
      Sign Out
    </button>
  ) : (
    <button
      onClick={() => dispatch(openAuthModal(null))} // open modal for login
      className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition"
    >
      Sign In
    </button>
  );
}
