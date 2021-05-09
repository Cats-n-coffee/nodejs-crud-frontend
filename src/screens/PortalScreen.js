import React from 'react'
import InvoiceForm from '../components/forms/InvoiceForm'
import InvoiceList from '../components/portalElements/InvoiceList'
//import InvoiceSearch from '../components/portalElements/InvoiceSearch'

export default function PortalScreen(props) {
    const [openInvoiceForm, setOpenInvoiceForm] = React.useState(false)
    const [invoiceAdded, setInvoiceAdded] = React.useState(0)
    const [invoiceOpen, setInvoiceOpen] = React.useState(false)

    return (
        <div>
            <h1>Portal page</h1>
            <button onClick={ () => setOpenInvoiceForm(true) }>Add Invoice</button>
            <InvoiceForm 
                open={ openInvoiceForm } 
                setOpenInvoiceForm={ setOpenInvoiceForm } 
                setInvoiceAdded={ setInvoiceAdded }
            />
            <InvoiceList 
                invoiceAdded={ invoiceAdded } 
                setInvoiceAdded={ setInvoiceAdded }
                invoiceOpen={ invoiceOpen }
                setInvoiceOpen={ setInvoiceOpen }
            />
        </div>
    )
}