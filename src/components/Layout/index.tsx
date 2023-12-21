import Menu from '../Menu';
import BarraLateral from '../BarraLateral';

const Layout = ({children}: {children: JSX.Element}) => {
  return (
    <>
        <Menu />
        <BarraLateral />
        {children}
    </>
  );
}

export default Layout;