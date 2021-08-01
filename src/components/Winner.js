import React from 'react';
import styled from 'styled-components';

const WinnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  background-color: rgba(255, 255, 255, 0.25);
  padding: 1rem;
  box-shadow: 0 2px 4px 0 rgba( 0, 0, 0, 0.15);
  margin: 1rem 0;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  div.photo {
    width: 120px;
    height: 120px;
    background-position: center;
    background-size: cover;
    border-radius: 50%;
    margin-right: 1rem;
  }

  p {
    font-size: 1.75rem;
    font-weight: bold;
  }
  p.congrats {
    font-size: 1.25rem;
    font-weight: unset;
    margin-left: 2rem;
    text-align: right;
  }
`;

export const Winner = ({person}) => {
  let winner = person[0];
  return (
    <WinnerContainer>
      <div>
        <div className="photo" style={{ backgroundImage: `url(${winner.image})` }}/>
        <p>
          {`Nº ${winner.number}`}
          <br />
          {`${winner.name}`}
        </p>
      </div>
      <p className="congrats">Parabéns!!!<br />
      Você ganhou o prêmio de R$ 150,00!</p>
    </WinnerContainer>
  )
}
