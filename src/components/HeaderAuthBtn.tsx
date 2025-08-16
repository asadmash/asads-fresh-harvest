"use client";

import { useAppSelector, useAppDispatch } from "@/hooks/reduxHooks";
import { openAuthModal } from "@/features/auth/authSlice";
import { signOut, useSession } from "next-auth/react";
import { persistor } from "@/store/store";

export default function HeaderAuthButton() {
  const { data: session, status } = useSession();
  const dispatch = useAppDispatch();

  if (status === "loading") return null;

  return session ? (
   <button
  onClick={async () => {
    try {
      // Clear persisted Redux state
      await persistor.purge();

      // Sign out with NextAuth and redirect
      await signOut({ callbackUrl: "/" });
    } catch (err) {
      console.error("Error signing out:", err);
    }
  }}
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
