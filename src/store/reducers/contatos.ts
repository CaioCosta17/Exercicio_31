import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Definição do tipo de um Contato
export type Contato = {
  id: number
  nome: string
  email: string
  telefone: string
}

// Definição do tipo do Estado ( A lista inteira )
type ContatosState = {
  itens: Contato[]
  termoBusca: string
}

// Estado inicial
const initialState: ContatosState = {
  itens: [],
  termoBusca: ''
}

// Criação do Slice
const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    // Ação para ADICIONAR um novo contato
    adicionar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      // Cria um novo ID baseado no último contato
      const ultimoContato = state.itens[state.itens.length - 1]

      const novoContato: Contato = {
        ...action.payload,
        id: ultimoContato ? ultimoContato.id + 1 : 1
      }
      state.itens.push(novoContato)
    },

    // Ação para REMOVER um contato
    remover: (state, action: PayloadAction<number>) => {
      //Filtra a lista, removendo o contato com o ID recebido
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },

    // Ação para EDITAR um contato
    editar: (state, action: PayloadAction<Contato>) => {
      const indexContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )

      // Se o contato for encontrado, atualiza todos os seus dados
      if (indexContato >= 0) {
        state.itens[indexContato] = action.payload
      }
    },

    // Altera o termo de busca
    alterarTermoBusca: (state, action: PayloadAction<string>) => {
      state.termoBusca = action.payload.toLowerCase()
    }
  }
})

export const { adicionar, remover, editar, alterarTermoBusca } =
  contatosSlice.actions

export default contatosSlice.reducer
