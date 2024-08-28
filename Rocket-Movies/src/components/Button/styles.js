import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    height: 56px;

    padding: 0 16px;
    margin-top: 20px;

    background: ${({theme, dark})=> dark ? theme.COLORS.BLACK : theme.COLORS.PINK};
    color: ${({theme, dark})=> dark ? theme.COLORS.PINK : theme.COLORS.BACKGROUND_800};

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