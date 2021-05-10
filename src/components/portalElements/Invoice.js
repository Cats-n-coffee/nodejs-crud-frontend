import React from 'react'

function Invoice(props) {

    function closeInvoice() {
        props.setInvoiceOpen(false)
        props.setCurrentInvoice(null)
    }

    return (
        <div>
            <h3>Invoice</h3>
            <button onClick={ closeInvoice  }>close</button>
            <div>
                <p>{ props.invoice.id }</p>
                <p>{ props.invoice.item }</p>
                <p>${ props.invoice.price }</p>
            </div>
            <button onClick={ () => props.deleteInvoice(props.invoice.invoice_id) }>delete invoice</button>
        </div>
    )
}

export default Invoice