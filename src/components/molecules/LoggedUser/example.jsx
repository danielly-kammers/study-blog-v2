import { createContext, useState, useContext, useEffect } from "react";

import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

const AuthContext = createContext();

function AuthContextProvider({ children }) {
 const [user, setUser] = useState(null);

 const login = (username) => {
  setUser(username);
 };

 const logout = () => {
  setUser(null);
 };

 return (
  <AuthContext.Provider value={{ user, login, logout }}>
   {children}
  </AuthContext.Provider>
 );
}

function App() {
 return <AuthContextProvider>{/* start da aplicação */}</AuthContextProvider>;
}

function LoggedUser() {
 const { user, login, logout } = useContext(AuthContext);

 useEffect(() => {
  console.log("user changed", user);
 }, [user]);

 return (
  <div>
   {user !== null ? (
    <>
     {user}
     <LogoutOutlinedIcon color="white" onClick={() => logout()} />
    </>
   ) : (
    <button onClick={() => login("Danielly")}>Login</button>
   )}
  </div>
 );
}

export { LoggedUser };
export default App;
