import styled from 'styled-components'
import { lighColor } from '../../constants/colors'

export const Main = styled.div`
    background-color: ${lighColor};
    height: 250px;
    width: 250px;
    min-width: 250px;
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 10px;
    box-shadow: 2px 2px 5px ${lighColor};
    padding: 20px 0px;
;
`
export const Image = styled.img`
    width: 70%;
    height: 55%;
`
export const DivTitle = styled.div`
    height: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const ImageTitle = styled.h1`
    font-size:1.1em;
    letter-spacing: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
`

