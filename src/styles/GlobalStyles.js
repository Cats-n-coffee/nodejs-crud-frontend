import { createGlobalStyle } from 'styled-components'
import { colors } from './colors'

const GlobalStyles = createGlobalStyle`
    *, *:before, *:after  {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    :root {
        --accent: ${ colors.accent };
        --c1light: ${ colors.c1light };
        --c1dark: ${ colors.c1dark };
        --c2light: ${ colors.c2light };
        --c2dark: ${ colors.c2dark };
        --c3light: ${ colors.c3light };
        --c3dark: ${ colors.c3dark };
    }

    html, body {
        position: relative;
        min-height: 100vh;
        width: 100%;
        font-size: 10px;
    }

    body[data-theme="light"] {
        --color-titles: var(--accent);
        --color-fonts: var(--c1dark);
        --color-background: var(--c1light);
        --color-boxes: var(--c3light);
        --color-inside: var(--c2light)

    }

    body[data-theme="dark"] {
        --color-titles: var(--accent);
        --color-fonts: var(--c1light);
        --color-background: var(--c1dark);
        --color-boxes: var(--c3dark);
        --color-inside: var(--c2dark)
    }

    li {
        list-style: none;
    }

    a {
        text-decoration: none;
    }
`;

export default GlobalStyles 