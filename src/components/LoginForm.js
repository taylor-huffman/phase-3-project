import React, { useContext/*, useState*/ } from 'react'
import { TextField, Box, Button } from '@mui/material'
import { UserContext } from '../context/user'
import RadioButtons from './RadioButtons'

export default function LoginForm({ setOpenLoginModal }) {

    const { setUser } = useContext(UserContext)

    function handleOnSubmit(e) {
        e.preventDefault()
        fetch(`http://localhost:9292/${e.target.userRole.value}s/find?name=${e.target.name.value}`)
        .then(r => r.json())
        .then(userObj => {
            setUser(userObj)
            localStorage.setItem('currentUser', JSON.stringify(userObj))
            setOpenLoginModal(false)
        })
        .catch(r => console.log(r))
    }

    return (
        <>
            <h1>Login</h1>
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
                        sx={{'& > :not(style)': { m: 1, margin: 0, width: '100%' },}}
                        type="submit">
                        Log In
                    </Button>
                </Box>
            </form>
        </>
    )
}