import './styles/globals.css';
import styled from 'styled-components';

import Logo from './assets/eduardo.png';
import { CTA } from './components/CTA';
import People from './components/rifa';
import { Winner } from './components/Winner';
import { useState } from 'react';
import CountUp from 'react-countup';

const AppContainer = styled.div`
  min-height: 100vh;
  max-width: 1100px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .sorting-label {
    font-size: 2rem;
    font-weight: bold;
    width: 100%;
    padding: 2rem;
    text-align: center;
    border-top: 2px dashed var(--disabled);
    border-bottom: 2px dashed var(--disabled);
  }

  @media screen and (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

function App() {
  const [stateApp, setStateApp] = useState('ready');
  const [winnerNumber, setWinnerNumber] = useState(0);

  const clickCTA = () => {
    setStateApp('sorting');
    
    setTimeout(() => {
      setStateApp('again');
      
      // *** Lógica de realização do sorteio.
      // - Número flutuante randômico de zero a 1, vezes o número de participantes da rifa.
      // - Como tem somente números inteiros e não tem número zero no sorteio, usa-se Math.ceil para arredondar pra cima.
      // *** Lógica de realização do sorteio.
      setWinnerNumber( Math.ceil(Math.random() * People.length) );
    }, 2100);
  }

  return (
    <AppContainer>
      <img
        src={Logo} alt="Chá Rifa do Eduardo"
        style={{ 
          maxWidth: '240px', 
          marginBottom: '1rem'
        }} />

      {stateApp === "sorting" && (
        <CountUp
          start={0}
          end={People.length}
          duration={2}
          delay={0}
          prefix="Sorteando: "
        >
          {({ countUpRef }) => (
            <div className="sorting-label">
              <span ref={countUpRef} />
            </div>
          )}
        </CountUp>
      )}

      {!!winnerNumber && winnerNumber > 0 && stateApp !== "sorting" && (
        <Winner person={People.filter((winner) => winner.number === winnerNumber)}/>
      )}
      
      <CTA 
        disabled={stateApp === "sorting"}
        onClick={clickCTA}
      >
        {stateApp === "ready" && "Sortear Rifa"}
        {stateApp === "sorting" && "Sorteando"}
        {stateApp === "again" && "Sortear Novamente"}
      </CTA>
    </AppContainer>
  );
}

export default App;
