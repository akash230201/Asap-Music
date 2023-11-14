"use client";

import { MyUserContextProvider } from "@/hooks/useUser";

interface UserProvideerProps {
  children: React.ReactNode;
}

const UserProvider: React.FC<UserProvideerProps> = ({ children }) => {
  return <MyUserContextProvider>{children}</MyUserContextProvider>;
};

export default UserProvider;
