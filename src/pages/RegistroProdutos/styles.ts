import styled from "styled-components";

export const DivRegistroProdutos = styled.div`
    background-color: pink;

    margin: 0px;
    padding: 0px;
    box-sizing: border-box;

    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 1.2em;

    .container-produtos{
        background-color: rgb(63, 72, 204);
        color: white;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        border: solid black;
        border-radius: 4px;

        width: 680px;
        /* height: 350px; */
        padding-top: 1rem;
        padding-bottom: 3rem;
    }

    .tabela-produtos{
        /* border: solid; */

        td, th{
            text-align: center;
            border: solid black;
        }
    }

    @media (max-width: 800px){
        .container-produtos{
            width: 95%;
        }

        .tabela-produtos{
            max-width: 100px;
            /* display: none; */
        }

        .ocultar{
            display: none;
        }
    }
`;