// import '../../styles/successPopUp.css'
import React, { Component } from 'react'
import Modal from 'react-modal'
import css from './successPopUp.module.css';
import Button from '../form/button';

interface ModalProps {
  paragraph: string;
  onConfirmCallback?: any;
  onCancelCallback: any;
  isModalOpen: boolean;
}

const SuccessPopUp: React.FC<ModalProps> = (props) => {
  const { paragraph, onCancelCallback, onConfirmCallback, isModalOpen } = props;
  console.log('IS MODAL OPEN', isModalOpen);
  return (
    <div className={css.modalContainer} >
      <Modal className={css.modal} isOpen={isModalOpen}>
        <div className={css.paragraph}>
          {paragraph}
        </div>
        <div>
          <Button
            styles={css.cancelButton}
            text='Cancelar'
            onClick={() => onCancelCallback()}
          />
          <Button
            styles={css.cancelButton}
            text='Confirmar'
            onClick={() => onConfirmCallback}
          />
        </div>
      </Modal>
    </div >
  )
};

export default SuccessPopUp;
