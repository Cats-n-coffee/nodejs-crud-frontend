import styled from 'styled-components'

export const MainPortalStyled = styled.main`
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: auto minmax()(0, 1fr);
    background: var(--color-background);

    @media screen and (min-width: 768px) {
        grid-template-columns: auto minmax(0, 1fr);
        grid-template-rows: minmax(0, 1fr);
    }
`;

export const AddInvoiceBtn = styled.button`
    width: 30px;
    height: 30px;
    background: var(--color-boxes);
    color: var(--color-fonts);
    border: none;
    border-radius: 50%;
    cursor: pointer;
`;