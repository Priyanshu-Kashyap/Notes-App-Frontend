import { Button, Divider, Input } from "@material-ui/core";
import React, { useState } from "react";
import { SignupRequest } from "../../models/SignupRequest";
import { AuthService } from "../../services/auth.service";

export default function Signup({ loginForm }: any) {
  const auth = new AuthService();
  const [signup, setSignup] = useState<SignupRequest>({
    username: "",
    email: "",
    password: "",
    imgUrl: "https://img.icons8.com/fluent/96/000000/test-account.png",
  });
  const singup = () => {
    if ((signup.username || signup.email || signup.password) === "") return;
    auth.signup(signup);
  };
  return (
    <div style={{ flexDirection: "column" }}>
      <Button onClick={loginForm} variant="outlined" fullWidth>
        already have an account ?
      </Button>
      <Divider style={{ margin: "1rem", width: "105%" }} variant="middle" />
      <Input
        onChange={(e) =>
          setSignup({ ...signup, username: e.currentTarget.value })
        }
        required
        autoFocus
        placeholder="username"
        color="secondary"
      />
      <Input
        onChange={(e) => setSignup({ ...signup, email: e.currentTarget.value })}
        style={{ margin: "0.5rem 0" }}
        required
        type="email"
        placeholder="email"
        color="secondary"
      />
      <Input
        onChange={(e) =>
          setSignup({ ...signup, password: e.currentTarget.value })
        }
        required
        style={{ margin: "0.5rem 0" }}
        type="password"
        placeholder="password"
        color="secondary"
      />
      <Input
        required
        style={{ margin: "0.5rem 0" }}
        type="password"
        placeholder="confirm password"
        color="secondary"
      />
      <Button
        disabled={false}
        onClick={singup}
        variant="contained"
        color="secondary"
        fullWidth
      >
        signup
      </Button>
    </div>
  );
}
