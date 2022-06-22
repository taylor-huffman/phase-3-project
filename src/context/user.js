import React, { useState } from 'react'

const UserContext = React.createContext()

function UserProvider({ children }) {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('currentUser')))

    return (
        <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
    )
}

export { UserContext, UserProvider }