import React, { useState } from 'react'
import Modal from './Modal'

const ReactModal = () => {
  const [modalOpen, setOpenModal] = useState(false);


  const openModal = () => {
    setOpenModal(true);
  }

  const closeModal = () => {
    setOpenModal(false);
  }

  return (
    <div className='reactModal'>
      <h1>react-modal을 이용한 모달 관리</h1>

      <div>
        <button onClick={openModal} className="button">첫번째 모달창 열기</button>
        <Modal open={modalOpen} close={closeModal} header="modal 1">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt numquam accusamus ratione tempore omnis cum nisi iusto dolorum iure, nostrum perferendis. Ab aut harum provident maxime culpa iste reprehenderit deserunt.
        </Modal>

        <button onClick={openModal} className="button">두번째 모달창 열기</button>
        <Modal open={modalOpen} close={closeModal} header="modal 2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, minus?
        </Modal>
      </div>
    </div>
  )
}

export default ReactModal