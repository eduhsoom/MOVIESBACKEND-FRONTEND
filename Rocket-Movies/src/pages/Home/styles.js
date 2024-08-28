import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 105px 1fr;
    grid-template-areas: 
    "header"
    "content"
    ;
    
`

export const Content = styled.main`
    width: 100%;
    grid-area: content;

    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 0 auto;
    padding: 0 100px;

    overflow: hidden;

    > div{
    width: 100%;
    
    display: grid;
    grid-template-columns: auto 210px;
    align-items: center;
    justify-content: space-between;

    margin: 50px 0 40px;

    h1{
        font-size: 32px;
    }    
    button{
            margin: 0;
        }
        
    }
`

export const LinkButton = styled(Link)`
    width: 100%;
    height: 56px;

    padding: 0 16px;
    margin-top: 20px;

    background: ${({theme})=> theme.COLORS.PINK};
    color: ${({theme})=> theme.COLORS.BACKGROUND_800};

    border: 0;
    border-radius: 10px;

    font-weight: 500;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 5px;

    &:disabled{
        opacity: 0.5;
    }

`
export const Menu = styled.ul`
    width: 100%;
    height: 100%;
    list-style: none;

    overflow-y: auto;
    padding: 5px 10px;

    margin-bottom: 20px;
`