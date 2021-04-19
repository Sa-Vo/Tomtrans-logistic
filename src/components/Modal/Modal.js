import React, { useState } from 'react';
import { ModalContent } from './ModalContent';
import FormOrder from '../../views/HomePage/components/FormOrder/FormOrder';
import { ModalBox, ButtonModal } from './ModalStyled';

const Modal = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev);
    };

    return (
        <>
            <ModalBox>
                <ButtonModal onClick={openModal}>Подати заявку</ButtonModal>

                <ModalContent
                    showModal={showModal}
                    setShowModal={setShowModal}
                    formC={FormOrder}
                ></ModalContent>
            </ModalBox>
        </>
    );
};

export default Modal;
