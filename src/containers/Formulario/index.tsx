import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { adicionar } from '../../store/reducers/contatos'

import {
  FormContainer,
  FormGroup,
  Label,
  Input,
  BotaoAdicionar
} from './styles'

// Componente de formulário
const Formulario = () => {
  const dispatch = useDispatch()

  // Estado locais para os campos dos formulários
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  const cadastrarContato = (e: React.FormEvent) => {
    e.preventDefault() //Impede recarregamento da página
    // Dispara a ação 'adicionar' do Redux com os dados do novo contato
    dispatch(
      adicionar({
        nome,
        email,
        telefone
      })
    )
    // Limpa os campos após o envio
    setNome('')
    setEmail('')
    setTelefone('')
  }

  return (
    <FormContainer onSubmit={cadastrarContato}>
      <FormGroup>
        <Label htmlFor="nomeCompleto">Nome Completo</Label>
        <Input
          id="nomeCompleto"
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Nome completo do contato"
          required
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="email">E-mail</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email@exemplo.com"
          required
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="telefone">Telefone</Label>
        <Input
          id="telefone"
          type="tel"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          placeholder="(XX) XXXXX-XXXX"
          required
        />
      </FormGroup>

      <FormGroup>
        <BotaoAdicionar type="submit">Adicionar Contato</BotaoAdicionar>
      </FormGroup>
    </FormContainer>
  )
}

export default Formulario
