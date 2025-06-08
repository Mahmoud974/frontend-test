import React, { createContext, useContext, useState, ReactNode } from "react";

interface UserData {
  fullName: string;
  email: string;
  github: string;
  avatarUrl: any;
}

const UserContext = createContext<{
  userData: UserData;
  setUserData: React.Dispatch<React.SetStateAction<UserData>>;
}>({
  userData: {
    fullName: "",
    email: "",
    github: "",
    avatarUrl: "",
  },
  setUserData: () => {},
});

// Créer le fournisseur du contexte
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userData, setUserData] = useState<UserData>({
    fullName: "",
    email: "",
    github: "",
    avatarUrl: "",
  });

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
