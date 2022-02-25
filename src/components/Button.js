import React from 'react'
import styled from 'styled-components'

const Button = ({children, onClick}) => {
  return (
    <ButtonWrapper onClick={onClick} >
      {children}
    </ButtonWrapper>
  )
}

const ButtonWrapper = styled.button`
  background: #112838;
  color: #ffff;
  border: none;
  padding: 20px;
  width: 50%;
  font-weight: 600;
  font-size: 1.1rem;
  border-radius: 30px;
`;

export default Button
