import styled from "styled-components";

export const DivMenu = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: rgb(63, 72, 204);
    color: white;

    border-bottom: solid black;

    .botao-lateral{
        margin: 1rem;
        margin-right: 5px;
        margin-left: 0px;
        font-size: 25px;
        /* background-color: red; */

        background-color: transparent;
        border: none;
        border-radius: 5px;

        cursor: pointer;
        transition: all 0.5s ease;
    }

    .botao-lateral:hover{
        background-color: pink;
    }

`;