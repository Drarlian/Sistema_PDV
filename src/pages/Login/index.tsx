import React, { useContext, useState } from 'react';
import { DivLogin } from './styles.ts';
import { AuthContext } from '../../contexts/AuthContext.tsx';
import { toast } from 'react-toastify';

const Login: React.FC = () => {
  const { fazerLogin } = useContext(AuthContext)

  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  function entrar(e: React.MouseEvent<HTMLButtonElement, MouseEvent>){
    e.preventDefault();

    if (login && senha){
      setLogin('');
      setSenha('');

      return fazerLogin(login, senha);  // Tenho que alterar esse return, adicionando uma mensagem de falha caso as credenciais sejam invalidas.
    }
  }

  return (
    <DivLogin>
      <div className='campo-login'>
        <form>
          <label>CPF</label>
          <input type='text' placeholder='cpf...' value={login} onChange={(e) => setLogin(e.target.value)}></input>
          <label>Senha</label>
          <input type='password' placeholder='senha...' value={senha} onChange={(e) => setSenha(e.target.value)}></input>
          <div>
            <button onClick={(e) => entrar(e)}>Entrar</button>
          </div>
        </form>
      </div>
    </DivLogin>
  );
}

export default Login;