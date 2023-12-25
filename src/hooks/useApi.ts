import axios from 'axios';

const url = axios.create({
    baseURL: 'https://api-gateway.bagaggio.com.br',
})

export const useApi = () => ({
    logar: async (login: string, password: string) => {
        try{
            const { data } = await url.post('/auth/store/sign-in', {
                login, password
            });
            return data
        } catch(error: any){
            console.log(error.response.data.message);
        }
        
    },
});