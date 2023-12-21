import styled from "styled-components";

export const DivLogin = styled.div`
    background-color: #a1d0ee;

    margin: 0px;
    padding: 0px;
    box-sizing: border-box;

    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    .campo-login{
        background-color: rgb(63, 72, 204);
        color: white;

        display: flex;
        justify-content: center;
        align-items: center;

        border: solid black;
        border-radius: 4px;

        width: 550px;
        height: 350px;

        form{
            /* background-color: blue; */

            display: flex;
            flex-direction: column;

            font-size: 2em;

            label{
                font-weight: bold ;
            }

            input{
                font-size: 0.7em;
                margin-top: 3px;
                margin-bottom: 1rem;
                padding: 3px;

                /* width: 80%; */
                height: 2rem;

                border-radius: 3px;
                border-style: none;
            }

            div{
                display: flex;
                justify-content: center;
            }

            button{
                background-color: rgb(147, 154, 246);

                width: 55%;
                height: 2.2rem;

                font-size: 0.7em;
                
                border-radius: 3px;
                border-style: none;
                cursor: pointer;

                transition: background-color 0.5s ease;
            }

            button:hover{
                background-color: rgb(184, 189, 253);
            }

        }
    }

    @media (max-width: 800px){
        .campo-login{
            width: 95%;
        }
    }
`;