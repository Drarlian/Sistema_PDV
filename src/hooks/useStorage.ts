// Criar um hook personalizado para mexer com o LocalStorage -> Adicionar, Pegar e Remover do LocalStorage

export const useStorage = () => ({
    adicionarItem: (chave: string, item: {}) => {
        localStorage.setItem(chave, JSON.stringify(item));
    },
    removerItem: (chave: string) => {
        localStorage.removeItem(chave);
    },
    pegarItem: (chave: string) => {
        const item = localStorage.getItem(chave);
        if (item){
            return JSON.parse(item)
        }
        else{
            return null
        }
    },
})