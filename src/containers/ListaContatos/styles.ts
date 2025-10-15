import styled from 'styled-components'
import { cores } from '../../styles/colors'

export const ContatosContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
`

export const CardContato = styled.div`
  background-color: ${cores.cinzaClaro};
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Info = styled.div`
  flex-grow: 1;

  input {
    display: block;
    margin-bottom: 4px;
    padding: 6px;
    border: 1px solid ${cores.cinzaEscuro};
    border-radius: 4px;
  }
`

export const NomeCompleto = styled.h4`
  font-size: 16px;
  color: ${cores.principal};
  margin-bottom: 4px;
`

export const Detalhe = styled.p`
  font-size: 14px;
  color: ${cores.secundaria};
`

export const Acoes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
  min-width: 100px;
`

export const BotaoAcao = styled.button`
  background: none;
  border: none;
  color: ${(props) => {
    if (props.title === 'Remover' || props.title === 'Cancelar')
      return cores.vermelho
    if (props.title === 'Salvar') return cores.verdeClaro
    return cores.principal
  }};
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }
`

export const Contador = styled.p`
  text-align: center;
  margin-top: 32px;
  font-size: 18px;
  font-weight: bold;
  color: ${cores.secundaria};
`
