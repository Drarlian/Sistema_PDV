import React, { useState } from 'react';
import { DivProduto } from './styles';
import { useContext } from 'react';
import { InfosContext } from '../../contexts/InfosContext';
import { toast } from 'react-toastify';


const Produto: React.FC = () => {
  const { produtoAtual, alteraQuantidadeProdutoAtual, reiniciarQuantidadeProdutoAtual } = useContext(InfosContext);
  const [valorRecebido, setValorRecebido] = useState('');
  let valorTotal: number | string = produtoAtual? (produtoAtual?.preco * produtoAtual?.quantidade).toFixed(2): NaN

  function aumentarProduto(){
    alteraQuantidadeProdutoAtual('+');
  }

  function diminuirProduto(){
    if (produtoAtual){
        if (produtoAtual?.quantidade > 1){
            alteraQuantidadeProdutoAtual('-');
        }
    }
  }

  function finalizarCompra(e: React.MouseEvent<HTMLButtonElement, MouseEvent>){
    e.preventDefault();

    const troco = Number(valorRecebido) - Number(valorTotal);
    if (troco > 0){
        toast.success(`Forneça o troco de R$${troco.toFixed(2)}`);
    } else {
        toast.error(`Faltam R$${Math.abs(Number(troco)).toFixed(2)} para finalizar a compra!`)
    }

  }

  function resetar(e: React.MouseEvent<HTMLButtonElement, MouseEvent>){
    e.preventDefault();
    reiniciarQuantidadeProdutoAtual();
  }
  
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
                    <p>
                        Quantidade: {produtoAtual?.quantidade} 
                        <div className='botoes-container1'>
                            <button onClick={diminuirProduto}>-</button> <button onClick={aumentarProduto}>+</button>
                        </div>
                    </p>
                    <p>Valor Uni: R${produtoAtual?.preco}</p>
                    <p>Valor Total: R${valorTotal}</p>
                    <p>Fornecedor: {produtoAtual?.fornecedor}</p>
                </div>
                <div className='container2'>
                    <form>
                        <label>Valor:</label>
                        <input type='number' value={valorRecebido} onChange={(e) => setValorRecebido(e.target.value)} placeholder='Valor recebido...'></input>
                        <div>
                            <button onClick={(e) => finalizarCompra(e)}>Finalizar</button>
                            <button onClick={(e) => resetar(e)}>Cancelar</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className='produto-infos2'>
                <div className='container3'>
                    <p>Tipo de Operação: <strong>Venda</strong></p>
                </div>
                <div className='container4'>
                    <div className='container4-filho' style={{'borderRight': 'solid', 'borderColor': 'black'}}>
                        <div><p>Volumes</p></div>
                        <div className='container4-direita'><p>{produtoAtual?.quantidade}</p></div>
                    </div>
                    <div className='container4-filho'>
                        <div><p>Total de Venda</p></div>
                        <div className='container4-direita'><p>R${valorTotal}</p></div>
                    </div>
                </div>
            </div>
        </div>
    </DivProduto>
  );
}

export default Produto;