import React, { useState } from 'react';
import { DivHome } from './styles';
import { useContext } from 'react';
import { InfosContext } from '../../contexts/InfosContext';


export const Home: React.FC = () => {
  const {procurarProduto} = useContext(InfosContext);

  const [codigo, setCodigo] = useState<string>('');

  function clicarProduto(e: React.FormEvent<HTMLButtonElement>, codigo: number){
    e.preventDefault();
    setCodigo('');

    procurarProduto(codigo);  // FAZER ALGO SE FOR FALSE OU TRUE
  }

  return (
  <DivHome>
    <div className='aba-inicial'>
        <h1>Código do Produto</h1>
        <div className='input-codigo'>
          <form>
            <input type='number' placeholder='código...' value={codigo} onChange={(e) => setCodigo(e.target.value)}></input>
            <button type="submit" onClick={(e) => clicarProduto(e, Number(codigo))}>Procurar</button>           
          </form>
        </div>
    </div>
  </DivHome>
  );
}

export default Home;