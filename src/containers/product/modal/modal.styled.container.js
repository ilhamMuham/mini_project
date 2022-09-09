import styled from 'styled-components'

export const ContainerModal = styled.div`
    top: 0;
    left: 0;
    z-index: 100; 
    width: 100%;
    height: 100%; 
    overflow: auto; 
    position: fixed; 
    padding-top: 100px;
    background-color: rgb(0,0,0); 
    background-color: rgba(0,0,0,0.4); 
`
export const ModalContent = styled.div`
    width: 55%;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    background-color: #fefefe;
`
export const InputProduct = styled.input`
    height: 5vh;
    margin: 10px 0px 20px 0px;
    border: 1px solid rgba(0,0,0,.125);
`
export const InputSelect = styled.select`
    height: 5vh;
    margin: 10px 0px 20px 0px;
    border: 1px solid rgba(0,0,0,.125);
`
export const InputTextArea = styled.textarea`
    height: 5vh;
    margin: 10px 0px 20px 0px;
    border: 1px solid rgba(0,0,0,.125);
`
export const CloseIcon = styled.p`
    font-size: 18px;
    margin-top: 0px;
    cursor: pointer;
    font-weight: bold;
    margin-left: 99vh;
    text-align: center;
`
export const ContainerHeader = styled.div`
    display: -webkit-inline-box;
`
export const FormProduct = styled.div`
    display: grid;
`
export const Title = styled.p`
    font-size: 18px;
    font-weight: bold;
`
export const ButtonSave = styled.button`
    width: 70px;
    border: none;
    padding: 5px;
    height: 40px;
    color: white;
    cursor: pointer;
    font-size: 16px;
    margin-top: 20px;
    font-weight: bold;
    margin-right: 20px;
    border-radius: 3px;
    background-color: blue;
`