import { useState } from 'react'
import styled from 'styled-components'

const InputButton = ({type, value, placeholder, onChange, onClick, icon}) => {

  return (
    <InputWrapper>
      <input type={type} placeholder={placeholder} onChange={onChange} value={value} />
      <button onClick={onClick}>{icon}</button>
    </InputWrapper>
  )
}

const InputWrapper = styled.div`
  display: flex;
  wrap: wrap;
  border-radius: 6px;

  input {
    width: 100%;
    border: solid 1px #ccc;
    padding: 10px;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }
  button {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    border: solid 1px #84855D;
    padding: 6px 40px;
    background: #84855D;
    color: #fff;
    font-size: 1.3rem;
  }
`;

export default InputButton
