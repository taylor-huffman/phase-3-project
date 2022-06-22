import React, { useContext } from 'react';
// import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { UserContext } from '../context/user'


// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );

export default function AppointmentCard({ appointment }) {

    const { user } = useContext(UserContext)

  return (
    <Card sx={{ minWidth: 275, margin: "10px 0" }}>
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Date: {appointment.date}
            </Typography>
            <Typography variant="h4" component="h4">
                {user !== null && user.user_role.role.toLowerCase() === 'teacher' ? `${appointment.student.name}` : `${appointment.teacher.name}`}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Subject: {appointment.subject.name}
            </Typography>
            <Button sx={{ minWidth: 'unset' }}>
                <EditOutlinedIcon />
            </Button>
            <Button sx={{ minWidth: 'unset' }}>
                <CancelOutlinedIcon />
            </Button>
        </CardContent>
    </Card>
  );
}