import React from 'react'
import InvoiceForm from '../components/forms/InvoiceForm'
import Table from '../components/portalElements/Table'

export default function PortalScreen(props) {
    const [openInvoiceForm, setOpenInvoiceForm] = React.useState(false)

    return (
        <div>
            <h1>Portal page</h1>
            <button onClick={ () => setOpenInvoiceForm(true) }>Add Invoice</button>
            <InvoiceForm open={ openInvoiceForm } setOpenInvoiceForm={ setOpenInvoiceForm } />
            <Table />
        </div>
    )
}