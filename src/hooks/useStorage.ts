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