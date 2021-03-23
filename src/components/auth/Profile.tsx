import { Button, createStyles, makeStyles, Theme } from "@material-ui/core";
import React, { useState } from "react";
import { AuthService } from "../../services/auth.service";
import Login from "./Login";
import Signup from "./Signup";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "absolute",
      flexDirection: "column",
      background: theme.palette.background.paper,
      width: "300px",
      borderRadius: "10px",
      zIndex: 1000,
      right: "1rem",
      top: "3.5rem",
      border: "1px solid rgba(66,66,66,0.2)",
      backdropFilter: "blur(10px)",
      padding: theme.spacing(2),
      alignItems: "center",
    },
  })
);

export default function Profile() {
  const auth = new AuthService();
  const classes = useStyles();
  const [loginForm, setLoginForm] = useState(true);
  // const userContext = useContext(UserContext);
  const setLogin = () => {
    setLoginForm(!loginForm);
    auth
      .oauth2User()
      .then((user) => console.log(user.data))
      .catch((err) => console.error(err));
  };
  const logout = () => auth.logout();

  return (
    <div className={classes.root}>
      {false ? (
        <>
          <div></div>
          <Button onClick={logout} variant="text" fullWidth>
            logout
          </Button>
        </>
      ) : loginForm ? (
        <Login loginForm={setLogin} />
      ) : (
        <Signup loginForm={setLogin} />
      )}
    </div>
  );
}
