import React, { useContext } from "react";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import LoginModal from "./LoginModal";
import { Add } from '@mui/icons-material';
import { UserContext } from '../context/user'
import AppointmentList from "./AppointmentList";


function Body() {

    const { user } = useContext(UserContext)

    return (
        <>
            {user ? <div>
                <section>
                    <Container maxWidth="md" sx={{display: "flex", flexDirection: "column", alignItems: "center", marginTop: "50px", backgroundColor: "#fafafa", padding: "30px"}}>
                            <Typography variant="h3" component="h3" sx={{ textAlign: "center"}}>
                                Create New Appointment
                            </Typography>
                            <Button color="primary" variant="outlined" size="large" sx={{ width: "fit-content", marginTop: "30px" }}>
                                <Add fontSize="large" />
                            </Button>
                    </Container>
                </section>
                <section>
                    <Container maxWidth="md" sx={{display: "flex", flexDirection: "column", marginTop: "50px"}}>
                            <Typography variant="p" component="p" sx={{ fontWeight: "bolder" }}>
                                Current Appointments For {user.name}
                            </Typography>
                            <AppointmentList appointments={user.appointments} />
                    </Container>
                </section>
            </div>
            :
            <div>
                <section>
                    <Container maxWidth="md" sx={{display: "flex", flexDirection: "column", alignItems: "center", marginTop: "50px", padding: "30px"}}>
                            <Typography variant="h3" component="h3" sx={{ textAlign: "center"}}>
                                Welcome To Meet The Teacher
                            </Typography>
                            <LoginModal text="Login To Get Started" color="#000000" marginTop="30px" />
                    </Container>
                </section>
            </div>}
        </>
    )
}

export default Body