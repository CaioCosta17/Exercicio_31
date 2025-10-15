import { createGlobalStyle } from 'styled-components'
import { cores } from './colors'

export const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
  }

  body {
    background-color: ${cores.fundo};
    color: ${cores.principal};
  }

  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 40px 20px
  }
`
