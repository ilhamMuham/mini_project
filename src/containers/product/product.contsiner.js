import { useState } from "react"
import Modal from './modal'
import {
    Logout
} from '../../components'

import {
    ButtonLogout
} from './product.styled.container'

const Product = () => {
    const product = [
        {
            name: 'Bla bla Flat Shoes',
            brand: 'Ardiles',
            sku: 'SK0067',
            description: 'good',
        },
        {
            name: 'this is laptop',
            brand: 'asus',
            sku: 'SK0089',
            description: 'new',
        }
    ]
    const [showModal, setShowModal] = useState(false)
    const [showLogout, setShowLogout] = useState(false)
    
    const _closeModal = () => {
        setShowModal(false)
    }
    const closeLog = () => {
        setShowLogout(false)
    }

    return (
        <div>
            <ButtonLogout onClick={()=> setShowLogout(true)}>Logout</ButtonLogout>
            <div>
                <p>List Product</p>
                <div>
                    <button onClick={()=> setShowModal(true)}>Add Product</button>
                </div>
            </div>
            <div>
                {
                    product.length > 0 ?
                    product.map((e,i)=> {
                        return (
                            <div key={i}>{e.name}</div>
                        )
                    }) : null
                }
            </div>
            {showModal && <Modal
            close={_closeModal}
            />}
            {showLogout && <Logout
            closeLog={closeLog}/>}
        </div>
    )
}
export default Product