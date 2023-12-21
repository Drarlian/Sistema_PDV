import React, { useContext } from 'react';
import { DivLateral } from './styles';
import { InfosContext } from '../../contexts/InfosContext';
import { Link } from 'react-router-dom';


const BarraLateral: React.FC = () => {
  const {statusJanela, alteraJanela} = useContext(InfosContext);

  return (
    <DivLateral status={statusJanela}>
      <Link to='/'><div className='item-lateral'>Página Inicial</div></Link>
      <div className='item-lateral'>Produtos</div>
      <div className='item-lateral' onClick={alteraJanela}>Voltar</div>
    </DivLateral>
  );
}

export default BarraLateral;