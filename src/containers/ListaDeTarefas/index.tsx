import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import Tarefa from '../../components/tarefa'
import { MainContainer, Titulo } from '../../styles'

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraTarefas = () => {
    let tarefasFiltradas = itens
    if (termo !== undefined) {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) => item.titulo.toLowerCase().search(termo.toLowerCase()) >= 0
      )

      if (criterio === 'prioridade') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.prioridade === valor
        )
      } else if (criterio === status) {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.status === valor
        )
      }

      return tarefasFiltradas
    } else {
      return itens
    }
  }

  const tarefas = filtraTarefas()

  const exibeResultadoFiltragem = (quantidade: number) => {
    let msg = ''
    const complementacao =
      termo !== undefined && termo.length > 0 ? `e "${termo}"` : ''

    if (criterio === 'todas') {
      msg = `${quantidade} tarefa(s) encontrada(s) como: todas ${complementacao}`
    } else {
      msg = `${quantidade} tarefa(s) encontrada(s) como: "${`${criterio}=${valor}`} ${complementacao}"`
    }
    return msg
  }
  const mensagem = exibeResultadoFiltragem(tarefas.length)

  return (
    <MainContainer>
      <Titulo as="p">{mensagem}</Titulo>

      {tarefas.map((t) => (
        <li key={t.titulo}>
          <Tarefa
            descricao={t.descricao}
            titulo={t.titulo}
            status={t.status}
            prioridade={t.prioridade}
            id={t.id}
          />
        </li>
      ))}
    </MainContainer>
  )
}

export default ListaDeTarefas
