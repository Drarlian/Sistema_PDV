import styled from "styled-components";

export const DivHome = styled.div`
    display: flex;
    justify-content: center;

    .aba-inicial{
        background-color: blueviolet;

        border: solid black 4px;
        border-radius: 5px;

        font-size: large;
        margin-top: 25vh;

        display: inline-flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        padding: 5px;
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
            align-items: center;
            flex-direction: column;
            box-sizing: border-box;

            width: 100%;
        }

        input{
            width: 85%;
            height: 25px;
            padding: 5px;
            border-radius: 4px;
            border-style: none;
            /* border: solid; */
        }

        button{
            margin-top: 5px;
            margin-bottom: 13px;
            width: 40%;
            padding: 5px;
            cursor: pointer;
            border-radius: 5px;
            border-style: none;
            box-sizing: border-box;
            transition: all 0.5s ease;
        }

        button:hover{
            background-color: red;
        }
    }

`;