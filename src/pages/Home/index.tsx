import React, { useState } from 'react';
import { DivHome } from './styles';
import { useContext } from 'react';
import { InfosContext } from '../../contexts/InfosContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const Home: React.FC = () => {
  const {procurarProduto, defineProdutoAtual } = useContext(InfosContext);

  const [codigo, setCodigo] = useState<string>('');
  const navigate = useNavigate();

  function clicarProduto(e: React.FormEvent<HTMLButtonElement>, codigoTemp: number){
    e.preventDefault();

    if (procurarProduto(codigoTemp)){
      toast.success('Código encontrado!');
      defineProdutoAtual(codigoTemp);
      setCodigo('');  // ?????
      navigate("/produto");
    } else{
      toast.error('Código não encontrado!');
    }

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