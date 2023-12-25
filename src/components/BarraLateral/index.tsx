import React, { useContext } from 'react';
import { DivLateral } from './styles';
import { InfosContext } from '../../contexts/InfosContext';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';


const BarraLateral: React.FC = () => {
  const {statusJanela, alteraJanela} = useContext(InfosContext);
  const { user, fazerLogout } = useContext(AuthContext);

  return (
    <DivLateral status={statusJanela}>
      <div>
        <Link to='/'><div className='item-lateral'>Página Inicial</div></Link>
        {user?.role === 'ADMIN' && (<div className='item-lateral'>Produtos</div>)}
        <div className='item-lateral' onClick={alteraJanela}>Voltar</div>
      </div>
      <div className='item-lateral' onClick={fazerLogout}>Sair</div>
    </DivLateral>
  );
}

export default BarraLateral;