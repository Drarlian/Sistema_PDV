import { createContext, useState } from "react";
import {ReactNode} from 'react';

type Props = {
    statusJanela: boolean;
    produtoAtual: Prod | null;
    alteraJanela: () => void;
    produtos: Prod[];
    procurarProduto: (codig: number) => boolean;
    defineProdutoAtual: (codigo: number) => void;
    alteraQuantidadeProdutoAtual: (operacao: string) => void;
    reiniciarQuantidadeProdutoAtual: () => void;
}

interface TiposProvider {
    children: ReactNode;
}

type Prod = {
    codigo: number,
    nome: string,
    preco: number,
    quantidade: number,
    fornecedor: string,
}

export const InfosContext = createContext({} as Props);

export const InfosProvider = ({children}: TiposProvider) => {
    const [statusJanela, setStatusJanel] = useState<boolean>(false);

    function alteraJanela(){
        setStatusJanel(!statusJanela);
    }

    const [produtos, setProdutos] = useState<Prod[]>([
        {codigo: 1, nome: 'Pão', preco: 2.5, quantidade: 5, fornecedor: 'Bauduco'},
        {codigo: 2, nome: 'Lasanha', preco: 20.1, quantidade: 3, fornecedor: 'Sadia'},
        {codigo: 3, nome: 'Sorvete de Chocolate', preco: 4.33, quantidade: 1, fornecedor: 'Nestle'},
        {codigo: 4, nome: 'Pão', preco: 2.5, quantidade: 5, fornecedor: 'Bauduco'},
        {codigo: 5, nome: 'Lasanha', preco: 20.1, quantidade: 3, fornecedor: 'Sadia'},
        {codigo: 6, nome: 'Sorvete de Chocolate', preco: 4.33, quantidade: 1, fornecedor: 'Nestle'},
        {codigo: 7, nome: 'Pão', preco: 2.5, quantidade: 5, fornecedor: 'Bauduco'},
        {codigo: 8, nome: 'Lasanha', preco: 20.1, quantidade: 3, fornecedor: 'Sadia'},
        {codigo: 9, nome: 'Sorvete de Chocolate', preco: 4.33, quantidade: 1, fornecedor: 'Nestle'},
        {codigo: 10, nome: 'Pão', preco: 2.5, quantidade: 5, fornecedor: 'Bauduco'},
    ]);

    const [produtoAtual, setProdutoAtual] = useState<Prod>({codigo: NaN, nome: '', preco: NaN, quantidade: NaN, fornecedor: ''});

    function procurarProduto(codigo: number){
        let achou = false;

        for (const produto of produtos) {
            if (produto.codigo === codigo) {
                achou = true;
                break;
            }
          }
        
        return achou;
    }

    function defineProdutoAtual(codigo: number){
        const prod = produtos.filter((produto) => produto.codigo === codigo)[0];
        prod.quantidade = 1;
        setProdutoAtual(prod);
    }

    function alteraQuantidadeProdutoAtual(operacao: string){
        if (operacao === '+'){
            setProdutoAtual({...produtoAtual, quantidade: produtoAtual.quantidade + 1});
        } else if (operacao === '-'){
            setProdutoAtual({...produtoAtual, quantidade: produtoAtual.quantidade - 1});
        }
    }

    function reiniciarQuantidadeProdutoAtual(){
        setProdutoAtual({...produtoAtual, quantidade: 1})
    }

    return <InfosContext.Provider value={{statusJanela, produtoAtual, alteraJanela, produtos, procurarProduto, defineProdutoAtual, alteraQuantidadeProdutoAtual, reiniciarQuantidadeProdutoAtual}}>{children}</InfosContext.Provider>
}