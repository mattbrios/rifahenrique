import React from 'react';
import styled from 'styled-components';

const CustomButton = styled.button`
  padding: 1rem 2.5rem;
  margin: 2rem 0;
  border: none;
  border-radius: 999px;
  box-shadow: 0 4px 16px 0px rgba(0, 0, 0, 0.25);
  font-weight: bolder;
  text-transform: uppercase;
  font-size: 1rem;
  color: var(--black);
  background-color: var(--button);
  cursor: pointer;
  transition: filter 0.25s;

  &:hover:not(:disabled) {
    filter: brightness(1.1);
  }

  &:disabled {
    background-color: var(--disabled);
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const CTA = (props) => {
  return (
    <CustomButton
      {...props}
    >
      {props.children}
    </CustomButton>
  )
}
