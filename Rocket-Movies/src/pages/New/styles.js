import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 
    "header"
    "form"
    ;

`

export const Form = styled.form`
    width: 100%;
    padding: 40px 110px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    gap: 24px;

    grid-area: form;

    overflow-y: scroll;
    > h1{
        font-weight: 500;
    }
    .Wrapper {
        display: flex;
        gap: 40px;
    }
`

export const Section = styled.section`
    width: 100%;

    > h2{
        font-size: 20px;
        font-weight: 400;

        color: ${({theme})=> theme.COLORS.GRAY_300};

        margin-bottom: 24px;
    }

    > div {
        width: 100%;
        padding: 16px;

        display: flex;
        align-items: center;
        gap: 24px;
        border-radius: 10px;

        background-color: ${({theme})=> theme.COLORS.BLACK};

        overflow-x: auto;
    }

`