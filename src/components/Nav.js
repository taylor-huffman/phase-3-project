import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import LoginModal from "./LoginModal";

function Nav() {
  return (
      <AppBar position="static">
        <Container maxWidth="md">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Meet The Teacher
                </Typography>
                <Button color="inherit">
                    <LoginModal />
                </Button>
            </Toolbar>
        </Container>
      </AppBar>
  );
}

export default Nav