import styled from 'styled-components'

import ListaContatos from './containers/ListaContatos/index'
import Filtro from './containers/Filtro/index'
import Formulario from './containers/Formulario/index'

import { cores } from './styles/colors'
import { EstiloGlobal } from './styles'

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
`

const Titulo = styled.h1`
  text-align: center;
  color: ${cores.principal};
  margin-bottom: 32px;
  font-size: 36px;
`

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Titulo>Lista de Contatos</Titulo>
        <Filtro />
        <Formulario />
        <ListaContatos />
      </Container>
    </>
  )
}

export default App
