import { createContext, useState } from "react";
import {ReactNode} from 'react';

type Props = {
    statusJanela: boolean;
    alteraJanela: () => void;
    produtos: Prod[];
    procurarProduto: (codig: number) => boolean;
}

interface TiposProvider {
    children: ReactNode;
}

type Prod = {
    codigo: number,
    nome: string,
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
        {codigo: 1, nome: 'Pão', quantidade: 5, fornecedor: 'Bauduco'},
        {codigo: 2, nome: 'Lasanha', quantidade: 3, fornecedor: 'Sadia'},
        {codigo: 3, nome: 'Sorvete de Chocolate', quantidade: 1, fornecedor: 'Nestle'},
    ]);

    function procurarProduto(codigo: number){
        let achou = false;

        for (const produto of produtos) {
            if (produto.codigo === codigo) {
                achou = true;
                break;
            }
          }
        
        console.log(codigo);
        console.log(achou);
        return achou;
    }

    return <InfosContext.Provider value={{statusJanela, alteraJanela, produtos, procurarProduto}}>{children}</InfosContext.Provider>
}