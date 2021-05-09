import React from 'react'
import { useFindInvoice } from '../../hooks/useFindInvoice'

function InvoiceSearch(props) {
    const [search, setSearch] = React.useState('')

    function searchInvoices(e) {
        e.preventDefault()
        console.log('searching')
        props.setSearchParams({ invoice_date: search })
        props.setInvoiceAdded(true)
    }

    return (
        <div>
            <form onSubmit={ searchInvoices }>
                <label htmlFor="invoice-search"></label>
                <input id="invoice-search" type="text" onChange={ (e) => setSearch(e.target.value) }/>
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default InvoiceSearch