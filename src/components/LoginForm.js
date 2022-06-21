import React, { useContext } from 'react'
import { TextField, Box, Button } from '@mui/material'
import { UserContext } from '../context/user'
import RadioButtons from './RadioButtons'
// import { useHistory } from 'react-router-dom'

export default function LoginForm({ setOpenLoginModal }) {

    const { setUser } = useContext(UserContext)
    // const history = useHistory()

    function handleOnSubmit(e) {
        e.preventDefault()
        setOpenLoginModal(false)
        localStorage.setItem('currentUser', e.target.name.value)
        setUser(e.target.name.value)
        fetch(`${process.env.REACT_APP_API_URL}?name=${e.target.name.value}`)
        .then(r => r.json())
        .then(data => {
            if (data.length === 0) {
                fetch(`${process.env.REACT_APP_API_URL}`, {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        name: e.target.name.value,
                        following: []
                    })
                })
                .then(r => r.json())
                .then(data => {
                    console.log(data)
                })
                .catch(error => console.log(error))
            }
        })
        .catch(error => console.log(error))
        // history.push('/account')
    }

    return (
            <>
                <h1>Login</h1>
                <form onSubmit={handleOnSubmit}>
                    <Box
                        sx={{'& > :not(style)': { m: 1, display: 'flex', flexDirection: 'column', margin: '25px 0' },}}
                        noValidate
                        autoComplete="off">
                        <TextField id="outlined-basic" label="Name" name='name' variant="outlined" />
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