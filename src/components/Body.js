import React, { useContext, useEffect, useState } from "react";
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import LoginModal from "./LoginModal";
import { Add } from '@mui/icons-material';
import { UserContext } from '../context/user'
import AppointmentList from "./AppointmentList";
import AppointmentModal from "./AppointmentModal";


function Body() {

    const { user } = useContext(UserContext)

    const [subjects, setSubjects] = useState([])
    const [partners, setPartners] = useState([])
    const [chooseSubject, setChooseSubject] = useState('')
    const [choosePartner, setChoosePartner] = useState('')
    const [date, setDate] = useState('')
    const [openAppointmentModal, setOpenAppointmentModal] = useState(false);
    const [openEditAppointmentModal, setOpenEditAppointmentModal] = useState(false);

    const handleOpen = () => setOpenAppointmentModal(true);
    const handleClose = () => setOpenAppointmentModal(false);
    const handleOpenEdit = () => setOpenEditAppointmentModal(true);
    const handleCloseEdit = () => setOpenEditAppointmentModal(false);

    const userRole = user !== null && user.user_role.role.toLowerCase() === 'teacher' ? 'students' : 'teachers'

    useEffect(() => {
        fetch('http://localhost:9292/subjects/all')
        .then(r => r.json())
        .then(data => setSubjects(data))
    }, [])
      

    useEffect(() => {
        fetch(`http://localhost:9292/${userRole}/all`)
        .then(r => r.json())
        .then(data => setPartners(data))
    }, [userRole])

    return (
        <>
            {user ?
                <div>
                    <section>
                        <Container
                            maxWidth="md"
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                marginTop: "50px",
                                backgroundColor: "#e6f0fa",
                                padding: "30px"
                            }}
                        >
                            <Typography
                                variant="h3"
                                component="h3"
                                sx={{
                                    textAlign: "center"
                                }}>
                                Create New Appointment
                            </Typography>
                                <AppointmentModal
                                    icon={<Add fontSize="large" />}
                                    border="1px solid"
                                    minWidth="64px"
                                    color="#000000"
                                    marginTop="15px"
                                    subjects={subjects}
                                    setSubjects={setSubjects}
                                    partners={partners}
                                    setPartners={setPartners}
                                    chooseSubject={chooseSubject}
                                    setChooseSubject={setChooseSubject}
                                    choosePartner={choosePartner}
                                    setChoosePartner={setChoosePartner}
                                    date={date}
                                    setDate={setDate}
                                    openAppointmentModal={openAppointmentModal}
                                    handleClose={handleClose}
                                    handleOpen={handleOpen}
                                    setOpenAppointmentModal={setOpenAppointmentModal}
                                />
                        </Container>
                    </section>
                    <section>
                        <Container
                            maxWidth="md"
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                marginTop: "50px"
                            }}
                        >
                            <Typography
                                variant="p"
                                component="p"
                                sx={{
                                    fontWeight: "bolder"
                                }}>
                                Current Appointments For {user.name}
                            </Typography>
                            <AppointmentList
                                appointments={user.appointments}
                                subjects={subjects}
                                setSubjects={setSubjects}
                                partners={partners}
                                setPartners={setPartners}
                                openEditAppointmentModal={openEditAppointmentModal}
                                handleCloseEdit={handleCloseEdit}
                                handleOpenEdit={handleOpenEdit}
                                setOpenEditAppointmentModal={setOpenEditAppointmentModal}
                            />
                        </Container>
                    </section>
                </div>
            :
                <div>
                    <section>
                        <Container
                            maxWidth="md"
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                marginTop: "50px",
                                padding: "30px"
                            }}
                        >
                            <Typography
                                variant="h3"
                                component="h3"
                                sx={{
                                    textAlign: "center"
                                }}>
                                Welcome To Meet The Teacher
                            </Typography>
                            <LoginModal
                                text="Login To Get Started"
                                color="#000000"
                                marginTop="30px"
                            />
                        </Container>
                    </section>
                </div>
            }
        </>
    )
}

export default Body