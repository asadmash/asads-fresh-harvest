"use client";

import { useAppDispatch } from "@/hooks/reduxHooks";
import { openAuthModal } from "@/features/auth/authSlice";
import { signOut, useSession } from "next-auth/react";

export default function HeaderAuthButton() {
  const { data: session, status } = useSession();
  const dispatch = useAppDispatch();

  if (status === "loading") return null;

  return session ? (
    <button
      onClick={async () => {
        try {
          // Just sign out with NextAuth and redirect
          await signOut({ callbackUrl: "/" });
        } catch (err) {
          console.error("Error signing out:", err);
        }
      }}
      className="px-2 py-2 border-1 border-orange-400 hover:text-white rounded hover:bg-orange-600 transition max-[400px]:hidden"
    >
      Sign Out
    </button>
  ) : (
    <button
      onClick={() => dispatch(openAuthModal(null))} // open modal for login
      className="px-2 py-2 border-1 border-orange-400 hover:text-white rounded hover:bg-orange-600 transition max-[400px]:hidden"
    >
      Sign In
    </button>
  );
}
