import React from "react";
import AppointmentCard from "./AppointmentCard";

function AppointmentList({ appointments, userRole, subjects, setSubjects, partners, setPartners, chooseSubject, setChooseSubject, choosePartner, setChoosePartner, date, setDate }) {
    return (
        <>
            {appointments.length ? appointments.map(appointment => {
            // return <h3 key={appointment.id}>{appointment.date}</h3>
                return <AppointmentCard key={appointment.id} appointment={appointment} userRole={userRole} subjects={subjects} setSubjects={setSubjects} partners={partners} setPartners={setPartners} chooseSubject={chooseSubject} setChooseSubject={setChooseSubject} choosePartner={choosePartner} setChoosePartner={setChoosePartner} date={date} setDate={setDate} />
            })
        :
        <p>No Appointments Scheduled</p>
        }
        </>
    )
}

export default AppointmentList