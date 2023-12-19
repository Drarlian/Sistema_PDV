import React, { useContext } from 'react';
import { DivLateral } from './styles';
import { InfosContext } from '../../contexts/InfosContext';


const BarraLateral: React.FC = () => {
  const {statusJanela, alteraJanela} = useContext(InfosContext);

  return (
    <DivLateral status={statusJanela}>
      <div className='item-lateral'>Página Principal</div>
      <div className='item-lateral'>Produtos</div>
      <div className='item-lateral' onClick={alteraJanela}>Voltar</div>
    </DivLateral>
  );
}

export default BarraLateral;