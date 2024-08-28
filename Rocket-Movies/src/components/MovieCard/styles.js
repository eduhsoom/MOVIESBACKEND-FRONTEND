import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding: 32px;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};

    border-radius: 10px;

    margin-top: 24px;

    cursor: pointer;

    transition: 200ms;
    
    > div{
        margin-bottom: 15px;
        display: flex;
        flex-direction: column;
        justify-content: center;

        
    }
    > p {
        overflow: hidden; 
        text-overflow: ellipsis; 
        display: -webkit-box;
        -webkit-line-clamp: 2; 
        -webkit-box-orient: vertical; 


        font-size: 16px;
        color: ${({theme}) => theme.COLORS.GRAY_100};

        margin-bottom: 25px;
    }

    &:hover{
        filter: brightness(1.1);
    }
`