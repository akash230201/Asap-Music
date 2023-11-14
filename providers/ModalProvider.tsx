"use client";

import { useEffect, useState } from "react";

import AuthModel from "@/components/AuthModal";
import UploadModal from "@/components/UploadModal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []); // this is used to prevent server side rendering.

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <AuthModel />
      <UploadModal />
    </>
  );
};

export default ModalProvider;
