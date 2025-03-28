import React, { createContext, useContext, useState, ReactNode } from "react";

interface UserData {
  fullName: string;
  email: string;
  github: string;
  avatarUrl: File | null;
}

const UserContext = createContext<{
  userData: UserData;
  setUserData: React.Dispatch<React.SetStateAction<UserData>>;
}>({
  userData: {
    fullName: "",
    email: "",
    github: "",
    avatarUrl: null,
  },
  setUserData: () => {},
});

// Créer le fournisseur du contexte
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userData, setUserData] = useState<UserData>({
    fullName: "",
    email: "",
    github: "",
    avatarUrl: null,
  });

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook personnalisé pour utiliser le contexte
export const useUserContext = () => useContext(UserContext);
