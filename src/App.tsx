import React, { useContext, useState } from "react";
import "./App.css";
import Login from "./containers/Login/Login";
import Test from "./containers/Test";
import User from "./containers/User";
import UserContextProvider, { UserContext } from "./contexts/user.context";
import { IUser } from "./models/user.model";

const App = () => {
  console.log("Component App rendered");
  const { isLogged } = useContext(UserContext);
  //const [userLogged, setUserLogged] = useState<IUser | null>(null);

  // const logout = () => {
  //   setUserLogged(null);
  // };

  // if (userLogged) {
  //   return <User user={userLogged} onLogout={() => logout()}></User>;
  // }

  return <div className="App">{!isLogged ? <Login /> : <User />}</div>;
};

export default App;
