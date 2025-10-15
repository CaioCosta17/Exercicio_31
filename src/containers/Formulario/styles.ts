import styled from 'styled-components'

import { cores } from '../../styles/colors'

export const FormContainer = styled.form`
  background-color: ${cores.fundo};
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 32px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  align-itens: end;
`

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  &:first-child {
    grid-column: span 2;
  }
`

export const Label = styled.label`
  font-weight: bold;
  font-size: 14px;
  color: ${cores.principal};
`

export const Input = styled.input`
  padding: 10px;
  border: 1px solid ${cores.cinzaEscuro};
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
`

export const BotaoAdicionar = styled.button`
  padding: 12px 20px;
  background-color: ${cores.verdeClaro};
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: brackground-color 0.3s;

  &:hover {
    background-color: ${cores.verdeEscuro};
  }
`
