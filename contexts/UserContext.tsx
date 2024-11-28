import { createContext, useState } from "react";

interface IGlobalUserContextProps {
  user: any;
  companies: any;
  loading: boolean;
  setUser: (_user: any) => void;
  setCompanies: (_companies: any) => void;
  setLoading: (_loading: boolean) => void;
}

export const GlobalUserContext = createContext<IGlobalUserContextProps>({
  user: {},
  loading: true,
  companies: [],
  setUser: () => {},
  setCompanies: () => [],
  setLoading: () => {},
});

export const GlobalUserContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({ name: "" });
  const [currentCompanies, setCurrentCompanies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <GlobalUserContext.Provider
      value={{
        user: currentUser,
        setUser: setCurrentUser,
        companies: currentCompanies,
        setCompanies: setCurrentCompanies,
        loading: isLoading,
        setLoading: setIsLoading,
      }}
    >
      {children}
    </GlobalUserContext.Provider>
  );
};
