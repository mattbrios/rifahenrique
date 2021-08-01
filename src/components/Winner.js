import React from 'react';
import styled from 'styled-components';

const WinnerContainer = styled.div`
  img {
    max-width: 150px;
  }
`;

export const Winner = ({person}) => {
  return (
    <WinnerContainer>
      <img src={person.image} alt={person.name} />
      <span>{`${person.number} - ${person.name}`}</span>
    </WinnerContainer>
  )
}
