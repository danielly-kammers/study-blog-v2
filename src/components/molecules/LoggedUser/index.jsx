import { useContext, useEffect } from "react";
import { AuthContext } from "../../../contexts/auth";

import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import styles from "./index.module.css";

function LoggedUser() {
 const { user, login, logout } = useContext(AuthContext);

 useEffect(() => {
  console.log("user changed", user);
 }, [user]);

 return (
  <div className={styles.wrapper}>
   {user !== null ? (
    <>
     {user}
     <LogoutOutlinedIcon
      className={styles.logoutIcon}
      color="white"
      onClick={() => logout()}
     />
    </>
   ) : (
    <button onClick={() => login("Danielly")}>Login</button>
   )}
  </div>
 );
}

export default LoggedUser;
