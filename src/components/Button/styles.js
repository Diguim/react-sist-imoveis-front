import { styled } from "styled-components";

export const Container = styled.button`
    border: 1px solid var(--gray);
    border-radius: 10px;
    padding: 10px;
    font-size: 1.2rem;
    font-weight: 300;
    &:hover{
        background-color: var(--gray);
        cursor: pointer;
    }
`