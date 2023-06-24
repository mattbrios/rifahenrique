import React from 'react';
import styled from 'styled-components';

const WinnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 960px;
  background-color: rgba(255, 255, 255, 0.25);
  padding: 1.5rem;
  box-shadow: 0 2px 4px 0 rgba( 0, 0, 0, 0.15);
  margin: 1rem 0;
  border-radius: 1rem;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;;
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
    clear: both;
  }

  @media screen and (max-width: 768px) {
    display: block;

    div {
      flex-direction: column;
      text-align: center;
      gap: 0.5rem;
    }

    p.congrats {
      text-align: center;
      margin: 1rem 0 0;
    }
  }
`;

export const Winner = ({person}) => {
  return (
    <WinnerContainer>
      <div>
        <div className="photo" style={{ backgroundImage: `url(${person.image})` }}/>
        <p>
          {`Nº ${person.number}`}
          <br />
          {`${person.name}`}
        </p>
      </div>
      <p className="congrats">Parabéns!!!<br />
      Você ganhou o prêmio de R$ 200,00!</p>
    </WinnerContainer>
  )
}
