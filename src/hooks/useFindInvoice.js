import React from 'react'
import { findInvoice } from '../utils/app-requests'

export function useFindInvoice(changeStatus, currentStatus, param) {
    const [userInvoices, setUserInvoices] = React.useState([])

    React.useEffect(() => {
        let isUpdating = true
        if (isUpdating) {
            findInvoice(param)
            .then(data => {
                setUserInvoices(data)
                changeStatus(false)
            })
            //.catch(err => console.log(err))
        }
        else {
            return null;
        }
        return () => { return isUpdating = false };
    }, [currentStatus])

    return [userInvoices]
}