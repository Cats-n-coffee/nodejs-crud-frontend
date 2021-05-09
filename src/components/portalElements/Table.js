import React from 'react'
import { findInvoice } from '../../utils/app-requests'
import { useAuth } from '../../context/auth-context'
import { useFindInvoice } from '../../hooks/useFindInvoice'
import InvoiceSearch from './InvoiceSeach'

function Table(props) {
    const { user } = useAuth()
    //const [userInvoices] = useFindInvoice(props.setInvoiceAdded, props.invoiceAdded, user._id)
    const [userInvoices, setUserInvoices] = React.useState([])
    const [searchParams, setSearchParams] = React.useState(null)

    React.useEffect(() => {
        let isUpdating = true
        let params = { user_id: user._id, ...searchParams }
        console.log(params)
        console.log(user._id)
        if (isUpdating) {
            findInvoice(params)
            .then(data => {
                setUserInvoices(data)
                props.setInvoiceAdded(false)
            })
            //.catch(err => console.log(err))
        }
        else {
            return null;
        }
        return () => { return isUpdating = false };
    }, [props.invoiceAdded])

    return (
        <div>
            <h3>Table component</h3>
            <ul>
                { userInvoices.length > 0 ? userInvoices.map(invoice => {
                    return (
                        <li key={invoice.invoice_id}>
                            <span>{invoice.item}</span>
                            <span>{invoice.price}</span>
                            <span>{invoice.invoice_date}</span>
                        </li>
                    )
                })
            : 'No invoice to show' }
            </ul>
            <InvoiceSearch 
                invoiceAdded={ props.invoiceAdded }
                setInvoiceAdded={ props.setInvoiceAdded }
                setSearchParams={ setSearchParams }
            />
        </div>
    )
}

export default Table