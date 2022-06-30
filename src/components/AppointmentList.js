import React from "react";
import AppointmentCard from "./AppointmentCard";

function AppointmentList({ appointments, userRole, subjects, setSubjects, partners, setPartners, editSubject, setEditSubject, editPartner, setEditPartner, editDate, setEditDate, openEditAppointmentModal, handleCloseEdit, handleOpenEdit, setOpenEditAppointmentModal }) {
    return (
        <>
            {appointments.length ? appointments.map(appointment => {
                return <AppointmentCard key={appointment.id} appointment={appointment} userRole={userRole} subjects={subjects} setSubjects={setSubjects} partners={partners} setPartners={setPartners} editSubject={editSubject} setEditSubject={setEditSubject} editPartner={editPartner} setEditPartner={setEditPartner} editDate={editDate} setEditDate={setEditDate} openEditAppointmentModal={openEditAppointmentModal} handleCloseEdit={handleCloseEdit} handleOpenEdit={handleOpenEdit} setOpenEditAppointmentModal={setOpenEditAppointmentModal} />
            })
        :
        <p>No Appointments Scheduled</p>
        }
        </>
    )
}

export default AppointmentList