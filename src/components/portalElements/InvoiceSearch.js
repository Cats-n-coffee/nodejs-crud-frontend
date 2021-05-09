import React from 'react'

function InvoiceSearch(props) {
    const [search, setSearch] = React.useState('')

    function searchInvoices(e) {
        e.preventDefault()
        console.log('searching')
        props.setSearchParams({ invoice_date: search })
        props.setInvoiceAdded(props.invoiceAdded + 1)
    }

    return (
        <div>
            <form onSubmit={ searchInvoices }>
                <label htmlFor="invoice-search"></label>
                <input id="invoice-search" type="date" onChange={ (e) => setSearch(e.target.value) }/>
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default InvoiceSearch