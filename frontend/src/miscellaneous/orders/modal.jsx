import React, {useEffect, useState} from 'react'
import CloseButton from '../icons/CloseButton'

const Modal = ({ closeModal, item }) => {
    if (!item) return null

    const [fadeClass, setFadeClass] = useState("fade-out")
    const [isClosing, setIsClosing] = useState(false);

    const handleClose = () => {
        if (isClosing) return; // prevents double-trigger of close animation
        setIsClosing(true);
        setFadeClass("fade-out");
        setTimeout(() => {
        closeModal();
        }, 300);
    };

    useEffect(() => {
        setFadeClass("fade-in")
        return () => setFadeClass("")
    }, [])

    const OrderComponent = item.component

    console.log(item)
    
    return (
    <div className={`menu-order-modal ${fadeClass}`}>
        <div className='menu-order-modal-panel'>
            <OrderComponent item={item}/>
            <div 
                className='menu-order-modal-close'
                onClick={handleClose}
            >
            <CloseButton />
            </div>
        </div>
    </div>
    )
}

export default Modal
