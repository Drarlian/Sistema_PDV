import styled from "styled-components";

export const DivProduto = styled.div`
    /* background-color: pink; */

    .produto-cabecalho{
        /* background-color: red; */

        display: flex;
        justify-content: space-between;
        margin-top: 0.5rem;

        .produto-titulo{
            /* background-color: brown; */
            font-size: 1.2em;
            margin-left: 10px;
            margin-right: 0px;
            font-weight: bold;
        }

        .produto-nome{
            /* background-color: coral; */
            font-size: 1.8em;
            margin-left: 0px;
            margin-right: 5rem;
            font-weight: bold;
        }
    }

    .produto-conteudos{
        /* background-color: pink; */

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .produto-infos1{
        /* background-color: yellow; */
        
        display: flex;
        justify-content: center;
        margin-top: 2rem;
        font-size: 1.4em;
        gap: 5rem;
        width: 100%;
    }

    .produto-infos2{
        /* background-color: aqua; */

        display: flex;
        justify-content: center;
        margin-top: 2rem;
        font-size: 1.4em;
        gap: 5rem;
        width: 100%;
    }

    .container1{
        /* background-color: green; */
        background-color: rgb(63, 72, 204);
        border: solid black;
        /* color: white; */
        border-radius: 3px;

        display: grid;
        grid-template-columns: repeat(2, 1fr);
        width: 550px;
        max-width: 95%;
    }

    .container1 p{
        background-color: white;
        border: solid black;
        border-radius: 5px;

        display: flex;
        justify-content: center;
        align-items: center;

        margin-right: 1rem;
        margin-left: 1rem;
        padding: 2px;

        .botoes-container1{
            display: flex;
            margin-left: 3px;
        }
    }

    .container1 p:nth-child(5){
      grid-column: span 2;
    }

    .container2{
        /* background-color: bisque; */
        background-color: rgb(63, 72, 204);
        color: white;
        border: solid black;
        border-radius: 3px;

        display: flex;
        justify-content: center;
        align-items: center;
        width: 550px;
        height: 300px;
        max-width: 95%;

        form{
            display: flex;
            flex-direction: column;
            width: 350px;  /* PAREI AQUI */
            /* margin-top: 10%; */

            label{
                /* background-color: pink; */
                font-size: 35px;

            }

            input{
                border-radius: 5px;
                border-style: none;
                padding:5px;
                margin-top: 8px;
                margin-bottom: 8px;

                height: 30px;
                font-size: 0.8em;

                /* background-color: azure; */
            }

            div{
                /* background-color: orange; */
                display: flex;
                justify-content: space-between;
                gap: 1rem;

                button{
                    background-color: rgb(147, 154, 246);
                    color: white;

                    width: 100%;
                    height: 1.8rem;

                    border-radius: 5px;
                    border-style: none;
                    cursor: pointer;
                    transition: background-color 0.8s ease;
                }

                button:hover{
                    background-color: rgb(184, 189, 253);
                }

            }
        }
    }
    .container3{
        /* background-color: azure; */
        background-color: rgb(63, 72, 204);
        color: white;
        border: solid black;
        border-radius: 3px;

        display: flex;
        justify-content: center;
        align-items: center;
        width: 550px;
        max-width: 95%;
    }

    .container4{
        /* background-color: blueviolet; */
        background-color: rgb(63, 72, 204);
        color: white;
        border: solid black;
        border-radius: 3px;

        display: flex;
        width: 550px;
        max-width: 95%;

        .container4-filho{
            /* border: solid; */

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

        .container1 p{
            font-size: 0.9em;
        }
    }
`;