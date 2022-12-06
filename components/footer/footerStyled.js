import styled from "styled-components";

export const MainFooter = styled.div`
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    div:first-child{
        background-color: white;
        width: 85%;
        display: flex;
        align-items: center;
        margin: 5px;
        border-radius: 15px;
        input{
            height: 50px;
            width: 100%;
            border: 1px solid white;
        }
    }

    div:last-child{
        width: 10%;
        a{
            display: flex;
            justify-content: end;
            margin: 5px;
            img{
                width: 50px;
                height: 50px;
                background-color: green;
                border-radius: 50px
            }
        }
    }

`