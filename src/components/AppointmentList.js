import React from "react";
import AppointmentCard from "./AppointmentCard";

function AppointmentList({
        appointments,
        userRole,
        subjects,
        partners,
        editSubject,
        setEditSubject,
        editPartner,
        setEditPartner,
        editDate,
        setEditDate
    }) {
    return (
        <>
            {appointments.length ? appointments.map(appointment => {
                return (
                    <AppointmentCard
                        key={appointment.id}
                        appointment={appointment}
                        userRole={userRole}
                        subjects={subjects}
                        partners={partners}
                        editSubject={editSubject}
                        setEditSubject={setEditSubject}
                        editPartner={editPartner}
                        setEditPartner={setEditPartner}
                        editDate={editDate}
                        setEditDate={setEditDate}
                    />
                )
            })
            :
                <p>No Appointments Scheduled</p>
            }
        </>
    )
}

export default AppointmentList