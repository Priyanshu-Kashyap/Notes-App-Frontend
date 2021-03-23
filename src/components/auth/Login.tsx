import { Button, Divider, Input } from "@material-ui/core";
import { useMemo, useState } from "react";
import { AuthService } from "../../services/auth.service";

export default function Login({ loginForm }: any) {
  const auth = useMemo(() => new AuthService(), []);
  const [login, setLogin] = useState({ email: "", password: "" });
  // const userContext = useContext(UserContext);
  const handleLogin = () => {};
  const handleSubmit = () => {
    // if ((login.email || login.password) === "") return;
    // auth.login(login).then((user) => {
    //   setClientToken(user.data.token);
    //   console.log(user.data.user);
    //   userContext.uid = user.data.user.uid;
    // });
  };
  return (
    <div style={{ flexDirection: "column" }}>
      <Button
        onClick={handleLogin}
        href="http://localhost:8080/oauth2/authorization/google"
        fullWidth
        variant="contained"
        startIcon={
          <img
            src="https://img.icons8.com/fluent/24/000000/google-logo.png"
            alt=""
          />
        }
      >
        Google
      </Button>
      <Divider style={{ margin: "1rem", width: "105%" }} variant="middle" />
      <Input
        required
        onChange={(e) => setLogin({ ...login, email: e.currentTarget.value })}
        autoFocus
        type="email"
        placeholder="email"
        color="secondary"
      />
      <Input
        required
        onChange={(e) =>
          setLogin({ ...login, password: e.currentTarget.value })
        }
        color="secondary"
        style={{ margin: "0.5rem 0" }}
        type="password"
        placeholder="password"
      />
      <div style={{ width: "100%", justifyContent: "space-around" }}>
        <Button onClick={loginForm} style={{ width: "45%" }} variant="outlined">
          signup
        </Button>
        <Button
          onClick={handleSubmit}
          style={{ width: "45%" }}
          variant="contained"
          color="secondary"
        >
          login
        </Button>
      </div>
    </div>
  );
}
