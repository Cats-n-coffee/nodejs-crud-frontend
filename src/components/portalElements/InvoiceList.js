import React from 'react'
import { findInvoice, deleteInvoiceFromDb } from '../../utils/app-requests'
import { useAuth } from '../../context/auth-context'
//import { useFindInvoice } from '../../hooks/useFindInvoice'
import InvoiceSearch from './InvoiceSearch'
import Invoice from './Invoice'

function InvoiceList(props) {
    const { user } = useAuth()
    const [userInvoices, setUserInvoices] = React.useState([])
    const [searchParams, setSearchParams] = React.useState(null)
    const [currentInvoice, setCurrentInvoice] = React.useState(null)

    React.useEffect(() => {
        let isUpdating = true
        let params = { user_id: user._id, ...searchParams }
        console.log(params)
        console.log(user._id)
        if (isUpdating) {
            findInvoice(params)
            .then(data => {
                setUserInvoices(data)
            })
            //.catch(err => console.log(err))
        }
        else {
            return null;
        }
        return () => { return isUpdating = false };
    }, [props.invoiceAction])

    function openInvoice(invoice) {
        props.setInvoiceOpen(true)
        setCurrentInvoice(invoice)
        console.log('invoice clicked')
    }

    function deleteInvoice(invoiceId) {
        setCurrentInvoice(null)
        props.setInvoiceOpen(false) 
        
        deleteInvoiceFromDb({ invoice_id: invoiceId })
        .then(res => {
            props.setInvoiceAction(props.invoiceAction + 1)
        })
        .catch(err => console.log('err at delete invoice function', err))
    }

    return (
        <div>
            <h3>Table component</h3>
            <ul>
                { userInvoices.length > 0 ? userInvoices.map(invoice => {
                    return (
                        <li key={invoice.invoice_id} onClick={ () => openInvoice(invoice) }>
                            <span>{invoice.item}</span>
                            <span>{invoice.price}</span>
                            <span>{invoice.invoice_date}</span>
                        </li>
                    )
                })
            : 'No invoice to show' }
            </ul>
            <InvoiceSearch 
                invoiceAction={ props.invoiceAction }
                setInvoiceAction={ props.setInvoiceAction }
                setSearchParams={ setSearchParams }
            />
            { props.invoiceOpen ? 
                <Invoice 
                    setInvoiceOpen={ props.setInvoiceOpen } 
                    invoice={ currentInvoice }
                    setCurrentInvoice={ setCurrentInvoice }
                    deleteInvoice={ deleteInvoice }
                /> 
            : null }
        </div>
    )
}

export default InvoiceList