import React, { useState } from "react";
import "./App.css";
import Login from "./containers/Login/Login";
import Test from "./containers/Test";
import User from "./containers/User";
import { IUser } from "./models/user.model";

const App = () => {
  const [userLogged, setUserLogged] = useState<IUser | null>(null);

  const logout = () => {
    setUserLogged(null);
  };

  if (userLogged) {
    return <User user={userLogged} onLogout={() => logout()}></User>;
  }

  return (
    <div className="App">
      <Login onLogin={(user) => setUserLogged(user)} />
    </div>
  );
};

export default App;
