import React from 'react'
import { findInvoice, deleteInvoiceFromDb, updateInvoice } from '../../utils/app-requests'
import { useAuth } from '../../context/auth-context'
import InvoiceSearch from './InvoiceSearch'
import Invoice from './Invoice'
import { InvoiceListStyled } from './styles'

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
        .then(() => {
            props.setInvoiceAction(props.invoiceAction + 1)
        })
        .catch(err => console.log('err at delete invoice function', err))
    }

    function submitChanges(e) {
        e.preventDefault()
        console.log('edited', currentInvoice)
        props.setInvoiceOpen(false)

        updateInvoice(currentInvoice)
        .then(res => {
            console.log(res)
            props.setInvoiceAction(props.invoiceAction + 1)
        })
        .catch(err => console.log('err at submit changes', err))
    }

    return (
        <InvoiceListStyled>
            <InvoiceSearch 
                invoiceAction={ props.invoiceAction }
                setInvoiceAction={ props.setInvoiceAction }
                setSearchParams={ setSearchParams }
            />
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
            { props.invoiceOpen ? 
                <Invoice 
                    setInvoiceOpen={ props.setInvoiceOpen } 
                    invoice={ currentInvoice }
                    setCurrentInvoice={ setCurrentInvoice }
                    deleteInvoice={ deleteInvoice }
                    submitChanges={ submitChanges }
                /> 
            : null }
        </InvoiceListStyled>
    )
}

export default InvoiceList