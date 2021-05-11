import React from 'react'

function Invoice(props) {
    const [isEdited, setIsEdited] = React.useState(false)

    function closeInvoice() {
        props.setInvoiceOpen(false)
        props.setCurrentInvoice(null)
    }

    function defaultInvoice() {
        return (
            <div>
                <div>
                    <p>{ props.invoice.id }</p>
                    <p>{ props.invoice.item }</p>
                    <p>${ props.invoice.price }</p>
                </div>
                <button onClick={ () => setIsEdited(true) }>Edit</button>
                <button onClick={ () => props.deleteInvoice(props.invoice.invoice_id) }>delete invoice</button>
            </div>
        )
    }

    function editableInvoice() {
        return (
            <div>
                <button onClick={() => setIsEdited(false)}>Cancel edit</button>
                <form onSubmit={ props.submitChanges }>
                    <input
                        type="text"
                        onChange={(e) => props.setCurrentInvoice({ ...props.invoice, item: e.target.value })}
                        value={props.invoice.item}
                    />
                    <input
                        type="number"
                        onChange={(e) =>
                        props.setCurrentInvoice({ ...props.invoice, price: e.target.value })}
                        value={props.invoice.price}
                    />
                    <input
                        type="date"
                        onChange={(e) =>
                        props.setCurrentInvoice({ ...props.invoice, invoice_date: e.target.value })}
                        value={props.invoice.invoice_date}
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }

    return (
        <div>
            <h3>Invoice</h3>
            <button onClick={ closeInvoice  }>close</button>
            { isEdited ? editableInvoice() : defaultInvoice() }
        </div>
    )
}

export default Invoice