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
        setEditDate,
        setAllAppointments
    }) {

    const appointmentsSortByDate = appointments.sort((a,b) => {
        if (a.date < b.date) {
            return -1
        } else if (a.date > b.date) {
            return 1
        } else {
            return 0
        }
    })

    return (
        <>
            {appointmentsSortByDate.length ? appointments.map(appointment => {
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
                        setAllAppointments={setAllAppointments}
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