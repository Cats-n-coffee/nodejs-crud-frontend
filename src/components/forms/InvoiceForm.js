import React from 'react'
import { addNewInvoice } from '../../utils/app-requests'
import { useAuth } from '../../context/auth-context'

function InvoiceForm(props) {
    const { user } = useAuth()
    const [item, setItem] = React.useState('')
    const [price, setPrice] = React.useState('')
    const [invoiceDate, setInvoiceDate] = React.useState('')

    function submitInvoice(e) {
        e.preventDefault()
        console.log('submitted')
        // perform validation here or call other function for it
        addNewInvoice({ user_id: user._id, item, price, invoice_date: invoiceDate })
        props.setInvoiceAction(props.invoiceAction + 1)
    }

    return (props.open) ? (
        <div style={{ backgroundColor: 'pink' }}>
            <h2>New Invoice</h2>
            <button onClick={ () => props.setOpenInvoiceForm(false) }>close</button>
            <form onSubmit={ submitInvoice }>
                <div>
                    <label htmlFor="item">Item</label>
                    <input 
                    id="item" 
                    type="text"
                    onChange={ (e) => setItem(e.target.value) }
                    />
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <input 
                    id="price" 
                    type="text"
                    onChange={ (e) => setPrice(e.target.value) }
                    />
                </div>
                <div>
                    <label htmlFor="invoice-date">Invoice Date</label>
                    <input 
                    id="invoice-date" 
                    type="date"
                    onChange={ (e) => setInvoiceDate(e.target.value) }
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    ) : ""
}

export default InvoiceForm