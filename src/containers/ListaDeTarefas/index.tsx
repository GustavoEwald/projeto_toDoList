import Tarefa from '../../components/tarefa'
import { Container } from './styles'

const ListaDeTarefas = () => (
  <Container>
    <p>2 tarefas marcadas como: &quot;Categoria&quot; e &quot;termo&quot;</p>
    <ul>
      <li>
        <Tarefa />
      </li>
      <li>
        <Tarefa />
      </li>
      <li>
        <Tarefa />
      </li>
      <li>
        <Tarefa />
      </li>
      <li>
        <Tarefa />
      </li>
    </ul>
  </Container>
)

export default ListaDeTarefas
