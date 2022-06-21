import React, { useEffect, useState } from "react";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { Add } from '@mui/icons-material';


function Body() {

    const [appointments, setAppointments] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/appointments")
          .then(r => r.json())
          .then(appointments => setAppointments(appointments));
      }, []);

    return (
        <>
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
                            Current Appointments
                        </Typography>
                        {appointments.map(appointment => {
                            return <h3 key={appointment.id}>{appointment.date}</h3>
                        })}
                </Container>
            </section>
        </>
    )
}

export default Body