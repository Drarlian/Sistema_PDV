import styled from "styled-components";

export const DivHome = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    .aba-inicial{
        background-color: rgb(63, 72, 204);
        color: white;

        border: solid black 4px;
        border-radius: 5px;

        font-size: large;
        margin-top: 25vh;

        /* display: inline-flex; */
        /* flex-direction: column; */
        /* justify-content: center; */
        /* align-items: center; */


        padding: 5px;
        width: 550px;
        height: 70%;

        h1{
            text-align: center;
            margin-bottom: 30%;
        }
    }

    .input-codigo{
        /* background-color: pink; */

        display: flex;
        align-items: center;
        flex-direction: column;
        box-sizing: border-box;

        width: 100%;

        form{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            box-sizing: border-box;

            width: 100%;

            input{
                width: 60%;
                height: 30px;
                padding: 5px;
                border-radius: 4px;
                border-style: none;
                /* border: solid; */

                font-size: 1em;
            }

            button{
                margin-top: 10px;
                margin-bottom: 13px;
                width: 40%;
                height: 2.2rem;
                padding: 5px;
                font-size: 1em;

                background-color: rgb(147, 154, 246);
                cursor: pointer;
                border-radius: 5px;
                border-style: none;
                box-sizing: border-box;
                transition: all 0.5s ease;
            }

            button:hover{
                background-color: rgb(184, 189, 253);
            }
        }

        
    }

    @media (max-width: 800px){
        .aba-inicial{
            max-width: 100%;
            margin-left: 10px;
            margin-right: 10px;

            margin-top: 22vh;
        }
    }

`;