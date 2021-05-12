import styled from 'styled-components'

export const HeaderStyled = styled.header`
    background: var(--color-background);
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em 1.5em;
    border-bottom: 2px solid var(--color-inside);

    .header-buttons{
        display: flex;
        align-items: center;
        gap: 2em;
    }
`;

export const Button = styled.button`
    background: var(--color-titles);
    border: none;
    border-radius: 10px;
    padding: .6em 1em;
    text-transform: uppercase;
    font-size: 1.2rem;
    color: var(--color-fonts);
    cursor: pointer;
`;