import React from 'react'
import InvoiceForm from '../components/forms/InvoiceForm'
import InvoiceList from '../components/portalElements/InvoiceList'
//import InvoiceSearch from '../components/portalElements/InvoiceSearch'

export default function PortalScreen(props) {
    const [openInvoiceForm, setOpenInvoiceForm] = React.useState(false)
    const [invoiceAction, setInvoiceAction] = React.useState(0)
    const [invoiceOpen, setInvoiceOpen] = React.useState(false)

    return (
        <div>
            <h1>Portal page</h1>
            <button onClick={ () => setOpenInvoiceForm(true) }>Add Invoice</button>
            <InvoiceForm 
                open={ openInvoiceForm } 
                setOpenInvoiceForm={ setOpenInvoiceForm } 
                setInvoiceAction={ setInvoiceAction }
                invoiceAction={ invoiceAction }
            />
            <InvoiceList 
                invoiceAction={ invoiceAction } 
                setInvoiceAction={ setInvoiceAction }
                invoiceOpen={ invoiceOpen }
                setInvoiceOpen={ setInvoiceOpen }
            />
        </div>
    )
}