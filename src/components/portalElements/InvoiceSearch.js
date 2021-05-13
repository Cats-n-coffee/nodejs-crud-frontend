import React from 'react'

function InvoiceSearch(props) {
    const [search, setSearch] = React.useState('')

    function searchInvoices(e) {
        e.preventDefault()
        console.log('searching')
        props.setSearchParams({ invoice_date: search })
        props.setInvoiceAction(props.invoiceAction + 1)
    }

    function showAllInvoices() {
        props.setSearchParams(null)
        props.setInvoiceAction(props.invoiceAction + 1)
    }

    return (
        <div data-testid="search-1">
            <form onSubmit={ searchInvoices }>
                <label htmlFor="invoice-search"></label>
                <input 
                    id="invoice-search" 
                    type="date" 
                    onChange={ (e) => setSearch(e.target.value) }
                    required
                    />
                <button type="submit">Search</button>
            </form>
            <button 
                type="button" 
                onClick={ showAllInvoices }
                disabled={ !search }
            >
                show all
            </button>
        </div>
    )
}

export default InvoiceSearch