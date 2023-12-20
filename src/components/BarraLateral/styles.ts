import styled from "styled-components";

export const DivLateral = styled.div<{status: boolean}>`
    background-color: red;

    display: flex;
    flex-direction: column;
    border-radius: 3px;

    /* Deixando a barra fixa na lateral direita */
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
    /*                                          */
    
    width: ${(props) => props.status ? '250px': '0px'};
    transition: all 0.5s ease;
    overflow: hidden;  // Qualquer conteúdo que ultrapasse os limites do container será cortado e não será visível.

    .item-lateral{
        display: flex;
        justify-content: center;
        font-size: large;
        /* margin-bottom: 10px; */
        padding: 10px 0px 10px 10px;
        
        white-space: nowrap;  // Não quebra a linha quando estou fechando a div

        cursor: pointer;
        transition: all 0.5s ease;

        /* background-color: pink; */
        /* border: solid; */
    }

    .item-lateral:hover{
        background-color: green;
    }

    @media (max-width: 800px){
        width: ${(props) => props.status ? '200px': '0px'};
    }
`;