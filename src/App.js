import './styles/globals.css';
import styled from 'styled-components';

import Logo from './assets/cha-logo.png';
import { CTA } from './components/CTA';
import People from './components/rifa';
import { Winner } from './components/Winner';

const AppContainer = styled.div`
  min-height: 100vh;
  max-width: 1100px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

function App() {

  const clickCTA = () => {
    alert("fui flicado");
  }

  return (
    <AppContainer>
      <img src={Logo} alt="Chá Rifa do Henrique" style={{ maxWidth: '300px' }} />
      <CTA onClick={clickCTA}>Sortear Rifa</CTA>
      {People.map((person, item) => (
        <Winner person={person}/>
      ))}
    </AppContainer>
  );
}

export default App;
