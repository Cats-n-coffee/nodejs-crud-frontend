import styled from 'styled-components'

export const ThemeTogglerStyled = styled.button`
    width: 54px;
    height: 24px;
    background: var(--color-titles);
    border-radius: 15px;
    border: none;
    cursor: pointer;
    position: relative;
    z-index: 1;

    &:after {
        content: '';
        position: absolute;
        top: 3px;
        left: 3px;
        padding: 3px;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background: var(--color-background);
        z-index: 2;
    }
`;