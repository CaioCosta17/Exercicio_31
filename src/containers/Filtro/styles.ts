import styled from 'styled-components'
import { cores } from '../../styles/colors'

export const FiltroConatiner = styled.div`
  background-color: ${cores.cinzaClaro};
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const LabelFiltro = styled.label`
  font-weight: bold;
  font-size: 14px;
  color: ${cores.principal};
`

export const InputFiltro = styled.input`
  padding: 10px;
  border: 1px solid ${cores.cinzaEscuro};
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
`
