import React, { useState } from "react";
import { IUser } from "../models/user.model";
import { createContext } from "react";

export const UserContext = createContext({} as any);

const UserContextProvider = ({ children }: { children: any }) => {
  console.log("Context UserContextProvider rendered");
  const [user, setUser] = useState<IUser | null>(null);
  const [isLogged, setIsLogged] = useState(false);

  return (
    <UserContext.Provider value={{ user, isLogged, setUser, setIsLogged }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
