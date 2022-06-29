import React from "react";
import AppointmentCard from "./AppointmentCard";

function AppointmentList({ appointments, userRole, subjects, setSubjects, partners, setPartners, chooseSubject, setChooseSubject, choosePartner, setChoosePartner, date, setDate, openAppointmentModal, handleClose, handleOpen, setOpenAppointmentModal, patchAppointment }) {
    return (
        <>
            {appointments.length ? appointments.map(appointment => {
                return <AppointmentCard key={appointment.id} appointment={appointment} userRole={userRole} subjects={subjects} setSubjects={setSubjects} partners={partners} setPartners={setPartners} chooseSubject={chooseSubject} setChooseSubject={setChooseSubject} choosePartner={choosePartner} setChoosePartner={setChoosePartner} date={date} setDate={setDate} openAppointmentModal={openAppointmentModal} handleClose={handleClose} handleOpen={handleOpen} setOpenAppointmentModal={setOpenAppointmentModal} patchAppointment={patchAppointment} />
            })
        :
        <p>No Appointments Scheduled</p>
        }
        </>
    )
}

export default AppointmentList