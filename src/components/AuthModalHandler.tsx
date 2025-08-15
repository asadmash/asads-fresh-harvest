"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import AuthModal from "@/components/AuthModal";
import { useRouter } from "next/navigation";
import { closeAuthModal } from "@/features/auth/authSlice";

export default function AuthModalHandler() {
  const { showModal, redirectAfterLogin } = useSelector(
    (state: RootState) => state.auth
  );
  const dispatch = useDispatch();
  const router = useRouter();

  if (!showModal) return null;

  const handleClose = () => {
    dispatch(closeAuthModal());
    if (redirectAfterLogin) {
      router.push(`/products/${redirectAfterLogin}`);
    }
  };

  return <AuthModal onClose={handleClose} />;
}
