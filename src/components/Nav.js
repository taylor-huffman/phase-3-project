import React, { useContext } from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import LoginModal from "./LoginModal";
import { UserContext } from '../context/user'
import { Button } from "@mui/material";

function Nav() {

  const { user, setUser } = useContext(UserContext)

  function handleLogOutOnClick() {
    localStorage.clear()
    setUser(null)
  }

  return (
    <AppBar position="static">
      <Container maxWidth="md">
        <Toolbar sx={{ padding: "0!important" }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Meet The Teacher
          </Typography>
          {user ?
            <Button sx={{ color: "#ffffff", padding: "0" }} onClick={handleLogOutOnClick} >
              Logout
            </Button>
            :
            <LoginModal text="Login" color="#ffffff" marginTop="0" />
          }
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Nav