import React from 'react'
import { findInvoice } from '../../utils/app-requests'
import { useAuth } from '../../context/auth-context'

function Table(props) {
    const { user } = useAuth()

    React.useEffect(() => {
        findInvoice(user._id)
    }, [])

    return (
        <div>
            <h3>Table component</h3>
        </div>
    )
}

export default Table