import React from 'react';
import { DivProduto } from './styles';
import { useContext } from 'react';
import { InfosContext } from '../../contexts/InfosContext';


const Produto: React.FC = () => {
  const { produtoAtual } = useContext(InfosContext);

  return (
    <DivProduto>
        <div className='produto-cabecalho'>
            <div className='produto-titulo'>Produto</div>
            <div className='produto-nome'>{produtoAtual?.nome}</div>
            <div></div>
        </div>
        <div className='produto-conteudos'>
            <div className='produto-infos1'>
                <div className='container1'>
                    <p>Código: {produtoAtual?.codigo}</p>
                    <p>Quantidade: {produtoAtual?.quantidade}</p>
                    <p>Valor Unitário: {produtoAtual?.preco}</p>
                    <p>Valor Total: {produtoAtual?.preco}</p>
                    <p>Fornecedor: {produtoAtual?.fornecedor}</p>
                </div>
                <div className='container2'>
                    <form>
                        <label>Valor:</label>
                        <input type='number' placeholder='Valor recebido...'></input>
                        <div>
                            <button>Finalizar</button>
                            <button>Cancelar</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className='produto-infos2'>
                <div className='container3'>
                    <p>Tipo de Operação: <strong>Venda</strong></p>
                </div>
                <div className='container4'>
                    <div className='container4-filho'>
                        <div><p>Volumes</p></div>
                        <div className='container4-direita'><p>Quantidade</p></div>
                    </div>
                    <div className='container4-filho'>
                        <div><p>Total de Venda</p></div>
                        <div className='container4-direita'><p>Valor Final</p></div>
                    </div>
                </div>
            </div>
        </div>
    </DivProduto>
  );
}

export default Produto;