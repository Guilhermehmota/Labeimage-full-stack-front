import styled from "styled-components"
import { primaryColor, secondaryColor } from "../../constants/colors";

export const Main = styled.div`
    width: 80vw;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    padding: 20px;
    row-gap: 30px;
    margin: 0 auto;
`;

export const Header = styled.header`
    width: 100%;
    background-color: ${secondaryColor};
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const Title = styled.h2`
    letter-spacing: 2px;
    margin-left: 20px;
    :hover {
        cursor:pointer;
    }
`
export const DivCreateImage = styled.div`
    margin: 20px;
`
export const DivButton = styled.div`
    margin-right: 20px;
    display: flex;
    gap: 10px;
`