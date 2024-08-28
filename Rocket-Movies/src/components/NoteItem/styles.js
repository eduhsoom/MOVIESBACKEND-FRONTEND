import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;

    padding: 16px;

    background: ${({theme, isNew}) => isNew ? "transparent" : theme.COLORS.BACKGROUND_800};
    color: ${({theme}) =>  theme.COLORS.GRAY_300};

    border: ${({theme, isNew}) => isNew ? `2px dashed ${theme.COLORS.GRAY_300}` : 'none'};
    border-radius: 10px;


    > button {
        border: none;
        background: none;

        font-size: 24px;
        color: ${({theme}) => theme.COLORS.PINK };

        display: flex;
        align-items: center;
        justify-content: center;

    }
    > input {
        height: 19px;
        width: 120px;

        flex-grow: 1;

        color: ${({theme}) => theme.COLORS.WHITE};

        background: transparent;
        border: none;
        outline: none;

        font-size: 16px;
        &::placeholder{
            color: ${({theme}) => theme.COLORS.GRAY_300};
        }
    }
`;