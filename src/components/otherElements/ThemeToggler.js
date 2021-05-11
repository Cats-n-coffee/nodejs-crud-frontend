import React from 'react'
import styled from 'styled-components'
import { THEME_MODE, useTheme } from '../../context/theme-context'
import { ThemeTogglerStyled } from './styles'

const { light, dark } = THEME_MODE;

function ThemeToggler(props) {
    const [ theme, setTheme ] = useTheme()

    function toggleTheme() {
        theme === light ? setTheme(dark) : setTheme(light);
        return false;
    }

    return (
        <ThemeTogglerStyled
        onClick={ toggleTheme }>
        </ThemeTogglerStyled>
    )
}

export default ThemeToggler