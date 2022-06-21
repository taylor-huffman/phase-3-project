import React from "react";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { Add } from '@mui/icons-material';


function Body() {
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
                            All Appointments
                        </Typography>
                </Container>
            </section>
        </>
    )
}

export default Body