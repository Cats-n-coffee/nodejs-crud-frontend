import React from 'react'
import InvoiceForm from '../components/forms/InvoiceForm'
import InvoiceList from '../components/portalElements/InvoiceList'
import { MainPortalStyled, AddInvoiceBtn } from './styles'

export default function PortalScreen(props) {
    const [openInvoiceForm, setOpenInvoiceForm] = React.useState(false)
    const [invoiceAction, setInvoiceAction] = React.useState(0)
    const [invoiceOpen, setInvoiceOpen] = React.useState(false)

    return (
        <MainPortalStyled>
            <AddInvoiceBtn onClick={ () => setOpenInvoiceForm(true) }>+</AddInvoiceBtn>
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
        </MainPortalStyled>
    )
}