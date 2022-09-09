import styled from 'styled-components'

export const CardLogin = styled.div`
    width: 50vh;
    min-height: 30vh;
    border: 1px solid rgba(0,0,0,.125);
`
export const Header = styled.div`
    min-height: 5vh;
    font-size: 24px;
    text-align: left;
    font-weight: bold;
    padding: 1vh 2.3vh;
    background-color: rgba(0,0,0,.03);
`
export const FormLogin = styled.div`
    display: grid;
    padding: 10px 20px;
`
export const InputLogin = styled.input`
    height: 5vh;
    margin: 10px 0px 20px 0px;
    border: 1px solid rgba(0,0,0,.125);
`
export const PageLogin = styled.div`
    top: 40%;
    padding: 10% 0%;
    text-align: -webkit-center;
`
export const LabelLogin = styled.label`
    text-align: left;
`
export const ContainerButton = styled.div`
    text-align: left;
    padding: 0px 20px 20px 20px;
`
export const ButtonLogin = styled.button`
    width: 70px;
    border: none;
    padding: 5px;
    height: 40px;
    color: white;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    margin-right: 20px;
    border-radius: 3px;
    background-color: blue;
`
export const ButtonRegister = styled.button`
    color: blue;
    border: none;
    padding: 5px;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    margin-right: 20px;
    border-radius: 3px;
    background-color: transparent;
`
export const WarningText = styled.p`
    color: red;
    margin-top: 0px;
    text-align: left;
`