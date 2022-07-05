import React, { useContext } from 'react'
import { TextField, Box, Button } from '@mui/material'
import { UserContext } from '../context/user'
import RadioButtons from './RadioButtons'

export default function CreateAccountForm({ setOpenLoginModal }) {

    const { setUser } = useContext(UserContext)

    function handleOnSubmit(e) {
        e.preventDefault()
        let userRole = e.target.userRole.value === 'teacher' ? 1 : 2
        fetch(`http://localhost:9292/${e.target.userRole.value}s`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                name: e.target.name.value,
                user_role_id: userRole
            })
        })
        .then(r => r.json())
        .then(userObj => {
            setUser(userObj)
            localStorage.setItem('currentUser', JSON.stringify(userObj))
            setOpenLoginModal(false)
        })
    }

    return (
        <>
            <h1>Create Account</h1>
            <form onSubmit={handleOnSubmit}>
                <Box
                    sx={{
                        '& > :not(style)': {
                            m: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            margin: '25px 0'
                        }
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        id="outlined-basic"
                        label="Name"
                        name='name'
                        variant="outlined"
                    />
                    <RadioButtons />
                    <Button
                        variant="contained"
                        sx={{
                            '& > :not(style)': {
                                m: 1,
                                margin: 0,
                                width: '100%'
                            }
                        }}
                        type="submit">
                        Create Account
                    </Button>
                </Box>
            </form>
        </>
    )
}