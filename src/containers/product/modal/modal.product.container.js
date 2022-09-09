
import {
    MultiInput
} from '../../../components'
import {
    Title,
    CloseIcon,
    ButtonSave,
    FormProduct,
    InputSelect,
    InputProduct,
    ModalContent,
    InputTextArea,
    ContainerModal,
    ContainerHeader,
} from './modal.styled.container'
const Modal = (props) => {
    return (
        <ContainerModal>
            <ModalContent>
                <ContainerHeader>
                    <Title>Add Product</Title>
                    <CloseIcon onClick={props.close}>x</CloseIcon>
                </ContainerHeader>
                <FormProduct>
                    <label htmlFor="uname"><b>Name</b></label>
                    <InputProduct type="text" placeholder="name" name="name"  />
                    <label htmlFor="uname"><b>SKU</b></label>
                    <InputProduct type="text" placeholder="sku" name="sku"  />
                    <label htmlFor="uname"><b>Brand</b></label>
                    <InputSelect name="cars" id="cars">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </InputSelect>
                    <label htmlFor="uname"><b>Deskripsi</b></label>
                    <InputTextArea/>
                    <label htmlFor="uname"><b>Variasi</b></label>
                    <MultiInput/>
                </FormProduct>
                <div>
                    <ButtonSave>Save</ButtonSave>
                </div>

            </ModalContent>

        </ContainerModal>
    )
}
export default Modal