import React from "react";
import AppointmentCard from "./AppointmentCard";

function AppointmentList({ appointments, userRole }) {
    return (
        <>
            {appointments.length ? appointments.map(appointment => {
            // return <h3 key={appointment.id}>{appointment.date}</h3>
                return <AppointmentCard key={appointment.id} appointment={appointment} userRole={userRole} />
            })
        :
        <p>No Appointments Scheduled</p>
        }
        </>
    )
}

export default AppointmentList