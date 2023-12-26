import React, { useContext } from 'react';

import { DivRegistroProdutos } from './styles.ts';
import { InfosContext } from '../../contexts/InfosContext.tsx';

const RegistroProdutos: React.FC = () => {

  const { produtos } = useContext(InfosContext);

  return (
    <DivRegistroProdutos>
      <div className='container-produtos'>
        <h1>Produtos em Estoque</h1>
        <table className='tabela-produtos'>
            <thead>
              <tr style={{'border': 'solid orange'}}>
                <th className="ocultar">Código</th>
                <th>Nome</th>
                <th>Preço</th>
                <th>Quantidade</th>
                <th>Fornecedor</th>
              </tr>
            </thead>
            <tbody>
              {produtos.map((produto) => (
              <tr key={produto.codigo}>
                <td className="ocultar">{produto.codigo}</td>
                <td>{produto.nome}</td>
                <td>{produto.preco}</td>
                <td>{produto.quantidade}</td>
                <td>{produto.fornecedor}</td>
              </tr>
              ))}
              
            </tbody>
          </table>
      </div>
    </DivRegistroProdutos>
  );
}

export default RegistroProdutos;