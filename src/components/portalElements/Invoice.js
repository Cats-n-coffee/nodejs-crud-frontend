import React from 'react'

function Invoice(props) {
    return (
        <div>
            <h3>Invoice</h3>
            <button onClick={ () => props.setInvoiceOpen(false) }>close</button>
        </div>
    )
}

export default Invoice