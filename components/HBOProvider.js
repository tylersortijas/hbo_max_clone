'use client'

import React, { useContext, useState } from 'react';

export const StateContext = React.createContext();

export function useStateContext() {
    return useContext(StateContext);
}

export function HBOProvider({ children }) {
    // User State
    const [user, setUser] = useState('');
    // Default User Image
    const defaultUserImg = 'https://images.cdn.prd.api.discomax.com/2023%2F3%2F31%2Fd401a2a0-d0ac-4a80-ac13-d9d34ec41c8d.png';
    // Create User Function
    const createUserAction = (e) => {
        setUser(e.target.value);
        console.log(user);
    }

    return (
        <StateContext.Provider
            value={{
                user,
                createUserAction,
                defaultUserImg
            }}>
            {children}
        </StateContext.Provider>
    )
}