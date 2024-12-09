import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="buscar" />
    </div>
    <S.Filtros>
      <FiltroCard />
      <FiltroCard />
      <FiltroCard />
      <FiltroCard />
      <FiltroCard />
      <FiltroCard ativo />
    </S.Filtros>
  </S.Aside>
)

export default BarraLateral
