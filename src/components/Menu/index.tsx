import React, { useContext } from 'react';
import { DivMenu } from './styles';
import { InfosContext } from '../../contexts/InfosContext';
import { IoMenu } from "react-icons/io5";

const Menu: React.FC = () => {
    const {alteraJanela} = useContext(InfosContext)

    return (
    <DivMenu>
        <p></p>
        <h1>Sistema PDV</h1>
        <button className='botao-lateral' onClick={alteraJanela}><IoMenu /></button>
    </DivMenu>
    );
}

export default Menu;