import React, { useContext, useState } from 'react';
import { DivLogin } from './styles.ts';
import { AuthContext } from '../../contexts/AuthContext.tsx';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const { fazerLogin } = useContext(AuthContext)

  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  const navegar = useNavigate();

  async function entrar(e: React.MouseEvent<HTMLButtonElement, MouseEvent>){
    e.preventDefault();

    if (login && senha){
      const userResultado = await fazerLogin(login, senha);
      setLogin('');
      setSenha('');

      if (userResultado){
        if (userResultado.role == 'ADMIN'){
          toast.success('Logando..')
          navegar('/produtos')
        } else if (userResultado.role === 'SELLER'){
          toast.success('Logando..')
          navegar('/')
        } else{
          toast.error('Credênciais Inválidas..')
        }
      }

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