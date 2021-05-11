import React from 'react'
import { ThemeProvider } from './theme-context'
import { AuthProvider } from './auth-context'
import GlobalStyles from '../styles/GlobalStyles'

export default function AppProvider({ children }) {
    return (
        <>
            <GlobalStyles />
            <AuthProvider>
                <ThemeProvider>
                    { children }
                </ThemeProvider>
            </AuthProvider>
        </>
    )
}