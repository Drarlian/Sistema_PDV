import styled from "styled-components";

export const DivProduto = styled.div`
    background-color: pink;

    .produto-cabecalho{
        background-color: red;

        display: flex;
        justify-content: space-between;

        .produto-titulo{
            background-color: brown;
            font-size: 20px;
            margin-left: 10px;
            margin-right: 0px;
        }

        .produto-nome{
            background-color: coral;
            font-size: 30px;
            margin-left: 0px;
            margin-right: 10px;
        }
    }

    .produto-conteudos{
        background-color: pink;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .produto-infos1{
        background-color: yellow;
        
        display: flex;
        justify-content: center;
        margin-top: 2rem;
        font-size: 25px;
        gap: 5rem;
        width: 100%;
    }

    .produto-infos2{
        background-color: aqua;

        display: flex;
        justify-content: center;
        margin-top: 2rem;
        font-size: 25px;
        gap: 5rem;
        width: 100%;
    }

    .container1{
        background-color: green;
        border: solid;

        display: grid;
        grid-template-columns: repeat(2, 1fr);
        width: 500px;
        max-width: 95%;
    }

    .container1 p{
        border: solid;
        border-radius: 5px;

        display: flex;
        justify-content: center;

        margin-right: 1rem;
        margin-left: 1rem;
    }

    .container1 p:nth-child(5){
      grid-column: span 2;
    }

    .container2{
        background-color: bisque;
        border: solid;

        display: flex;
        justify-content: center;
        align-items: center;
        width: 500px;
        height: 300px;
        max-width: 95%;

        form{
            display: flex;
            flex-direction: column;
            width: 350px;  /* PAREI AQUI */
            /* margin-top: 10%; */

            label{
                background-color: pink;
                font-size: 35px;

            }

            input{
                border-radius: 5px;
                border-style: none;
                padding:5px;
                margin-top: 8px;
                margin-bottom: 8px;

                height: 30px;

                background-color: azure;
            }

            div{
                background-color: orange;
                display: flex;
                justify-content: space-between;

                button{

                }

            }
        }
    }
    .container3{
        background-color: azure;
        border: solid;

        display: flex;
        justify-content: center;
        align-items: center;
        width: 500px;
        max-width: 95%;
    }

    .container4{
        background-color: blueviolet;
        border: solid;

        display: flex;
        width: 500px;
        max-width: 95%;

        .container4-filho{
            border: solid;

            display: flex;
            flex-direction: column;
            width: 100%;
            font-size: 20px;

            div{
                margin-left: 10px;
                margin-right: 10px;
            }
            
            .container4-direita{
                display: flex;
                justify-content: end;
            }

        }
    }

    @media (max-width: 800px){
        .produto-infos1{
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
        }

        .produto-infos2{
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
        }
    }
`;