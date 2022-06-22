import React from "react";
import AppointmentCard from "./AppointmentCard";

function AppointmentList({ appointments, userRole }) {
    return (
        <>
            {appointments.map(appointment => {
            // return <h3 key={appointment.id}>{appointment.date}</h3>
                return <AppointmentCard key={appointment.id} appointment={appointment} userRole={userRole} />
            })}
        </>
    )
}

export default AppointmentList