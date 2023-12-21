export type User = {
    user_store_id: string;
    filial: string;
    name: string;
    last_name: string;
    cpf: string;
    login: string;
    email: string;
    password: string;
    register: string;
    hash: string;
    phone_number: string;
    role: string;
    avatar: string;
}

export type Props = {
    user: User | null,
    fazerLogin: (login: string, senha: string) => Promise<boolean>
}