import {
  Button,
  createStyles,
  Divider,
  Input,
  InputBase,
  makeStyles,
  Theme,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexDirection: "column",
    },
  })
);
export default function Login() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button
        fullWidth
        variant='contained'
        startIcon={
          <img
            src='https://img.icons8.com/fluent/24/000000/google-logo.png'
            alt=''
          />
        }
      >
        Google
      </Button>
      <Divider style={{ margin: "1rem", width: "105%" }} variant='middle' />
      <Input autoFocus placeholder='email' color='secondary' />
      <Input
        color='secondary'
        style={{ margin: "0.5rem 0" }}
        type='password'
        placeholder='password'
      />
      <InputBase multiline placeholder='take a note' />
      <div style={{ width: "100%", justifyContent: "space-around" }}>
        <Button style={{ width: "45%" }} variant='outlined'>
          signup
        </Button>
        <Button style={{ width: "45%" }} variant='contained' color='secondary'>
          login
        </Button>
      </div>
    </div>
  );
}
