import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import InvoiceSearch from './InvoiceSearch.js'

// test('component renders in dom', () => {
//     render(<InvoiceSearch />)
//     const invoiceSearch = screen.getByTestId('search-1')

//     expect(invoiceSearch).toBeInTheDocument();
// });

describe('<InvoiceSearch />', () => {
    it('renders without crashing', () => {
        render(<InvoiceSearch />)
    });
})
