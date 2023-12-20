import { createContext, useState } from "react";
import {ReactNode} from 'react';

type Props = {
    statusJanela: boolean;
    produtoAtual: Prod | null;
    alteraJanela: () => void;
    produtos: Prod[];
    procurarProduto: (codig: number) => boolean;
    defineProdutoAtual: (codigo: number) => void;
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
    ]);

    const [produtoAtual, setProdutoAtual] = useState<Prod>({codigo: NaN, nome: '', preco: NaN, quantidade: NaN, fornecedor: ''},);

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
        setProdutoAtual(prod);
    }

    return <InfosContext.Provider value={{statusJanela, produtoAtual, alteraJanela, produtos, procurarProduto, defineProdutoAtual}}>{children}</InfosContext.Provider>
}