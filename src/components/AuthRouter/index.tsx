import { useContext } from 'react';
import Login from '../../pages/Login';
import { AuthContext } from '../../contexts/AuthContext';

// import { Container } from './styles';

const AuthRouter = ({children}: {children: JSX.Element}) => {
  const data = useContext(AuthContext)

  if (!data.user){
    return <Login />
  }

  return children;
}

export default AuthRouter;