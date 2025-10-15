import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { RootState } from '../../store'
import { remover, editar } from '../../store/reducers/contatos'
import { Contato } from '../../store/reducers/contatos'

import {
  ContatosContainer,
  CardContato,
  Info,
  NomeCompleto,
  Detalhe,
  Acoes,
  BotaoAcao,
  Contador
} from './styles'

const ListaContatos = () => {
  const { itens, termoBusca } = useSelector(
    (state: RootState) => state.contatos
  )
  const dispatch = useDispatch()

  const [contatoEmEdicao, setContatoEmEdicao] = useState<number | null>(null)
  const [novoNome, setNovoNome] = useState('')
  const [novoEmail, setNovoEmail] = useState('')
  const [novoTelefone, setNovoTelefone] = useState('')

  const handleRemover = (id: number) => {
    dispatch(remover(id))
  }

  const iniciarEdicao = (contato: Contato) => {
    setContatoEmEdicao(contato.id)
    setNovoNome(contato.nome)
    setNovoEmail(contato.email)
    setNovoTelefone(contato.telefone)
  }

  const salvarEdicao = (id: number) => {
    // Garante que enviará o tipo Contato completo para o reducer 'editar'
    dispatch(
      editar({
        id,
        nome: novoNome,
        email: novoEmail,
        telefone: novoTelefone
      })
    )
    setContatoEmEdicao(null)
  }

  const cancelarEdicao = () => {
    setContatoEmEdicao(null)
  }

  // Lógica de Filtragem
  const listaFiltrada = itens.filter((contato) => {
    // Se o termo de busca estiver vazio, retorna todos os contatos
    if (!termoBusca) return true

    const busca = termoBusca

    // Filtra o contato se o termo de busca for encontrado em qualquer um dos campos (nomes, email, telefon)
    return (
      contato.nome.toLowerCase().includes(busca) ||
      contato.email.toLowerCase().includes(busca) ||
      contato.telefone.toLowerCase().includes(busca)
    )
  })

  return (
    <>
      <ContatosContainer>
        {listaFiltrada.map((contato) => (
          <CardContato key={contato.id}>
            {contatoEmEdicao === contato.id ? (
              <Info>
                <input
                  type="text"
                  value={novoNome}
                  onChange={(e) => setNovoNome(e.target.value)}
                />
                <input
                  type="text"
                  value={novoEmail}
                  onChange={(e) => setNovoEmail(e.target.value)}
                />
                <input
                  type="text"
                  value={novoTelefone}
                  onChange={(e) => setNovoTelefone(e.target.value)}
                />
              </Info>
            ) : (
              // Modo de visualização: Texto
              <Info>
                <NomeCompleto>{contato.nome}</NomeCompleto>
                <Detalhe>{contato.email}</Detalhe>
                <Detalhe>{contato.telefone}</Detalhe>
              </Info>
            )}
            <Acoes>
              {contatoEmEdicao === contato.id ? (
                <>
                  <BotaoAcao
                    title="Salvar"
                    onClick={() => salvarEdicao(contato.id)}
                  >
                    Salvar
                  </BotaoAcao>
                  <BotaoAcao title="Cancelar" onClick={cancelarEdicao}>
                    Cancelar
                  </BotaoAcao>
                </>
              ) : (
                <>
                  <BotaoAcao
                    title="Editar"
                    onClick={() => iniciarEdicao(contato)}
                  >
                    Editar
                  </BotaoAcao>
                  <BotaoAcao
                    title="Remover"
                    onClick={() => handleRemover(contato.id)}
                  >
                    Remover
                  </BotaoAcao>
                </>
              )}
            </Acoes>
          </CardContato>
        ))}
      </ContatosContainer>

      <Contador>Total de Contatos: {listaFiltrada.length}</Contador>
    </>
  )
}

export default ListaContatos
