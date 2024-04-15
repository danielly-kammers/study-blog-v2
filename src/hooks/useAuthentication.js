import { useState } from "react";

function useAuthentication() {
 const [user, setUser] = useState(null);

 function login(username) {
  setUser(username);
 }

 function logout() {
  setUser(null);
 }

 return { user, login, logout };
}

export default useAuthentication;
