import { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { AiOutlineCloseCircle } from 'react-icons/ai'

const Modal = ({show, onClose, children}) => {
  const [ isBrowser, setIsBrowser ] = useState(false)

  useEffect(() => setIsBrowser(true))

  const handleClose = (e) => {
    e.preventDefault()
    onClose()
  }

  const modalContent = show ? ( <ModalWrapper className="modalbg">
    <div className="modalbody">
     <AiOutlineCloseCircle className="close" onClick={handleClose} />
      <div className="modalContent">
        {children}
      </div>
    </div>
  </ModalWrapper>
  ): null

  if(isBrowser) {
    return ReactDOM.createPortal(modalContent, document.getElementById('modal-root'))
  } else {
    return null
  }
  
}

const ModalWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9;
  overflow-y: auto;
  transition: 0.22s all ease;

  .modalbody {
    position: relative;
    top: 0;
    background: #FFFDFD;
    transition: 0.8s all ease;
    border-radius: 6px;
    width: 30%;
    height: auto;
    padding: 1.5rem 2.5rem;
    z-index: 9;
    overflow-y: auto;
    border: solid 2px #112838;
    ${'' /* margin-top: 10rem; */}

    @media(max-width: 768px) {
     width: 90%;
     height: auto;
    }
    

    .close {
      text-align: right;
      cursor: pointer;
      font-size: 1.5rem;
      color: #cccc;
      position: absolute;
      right: 1.5rem;
      top: 1.5rem;
    }
  }
  .modalContent {

  }
`;

export default Modal
