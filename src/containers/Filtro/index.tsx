import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'

import { alterarTermoBusca } from '../../store/reducers/contatos'
import { FiltroConatiner, LabelFiltro, InputFiltro } from './styles'

const Filtro = () => {
  const dispatch = useDispatch()

  const { termoBusca } = useSelector((state: RootState) => state.contatos)

  const handleBusca = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Dispara a ação 'alterarTermoBusca' com o novo valor do input
    dispatch(alterarTermoBusca(e.target.value))
  }

  return (
    <FiltroConatiner>
      <LabelFiltro htmlFor="filtroBusca">Pesquisar Contato:</LabelFiltro>
      <InputFiltro
        id="filtroBusca"
        type="text"
        placeholder="Digite o nome, e-mail ou telefone para filtrar"
        value={termoBusca}
        onChange={handleBusca}
      />
    </FiltroConatiner>
  )
}

export default Filtro
