import { useState } from 'react';
import { ChoiceDateBlock } from '../ChoceDateBlock';
import { Container } from '../Container';
import { EventBlock } from '../EventBlock';
import { Futer } from '../Futer';
import { Header } from '../Header';
import { AppWraper } from './AppWrapper';

function App() {
  const [selectedDiv, setSelectedDiv] = useState();
  return (
    <AppWraper>
      <Container>
        <Header />
        <ChoiceDateBlock />
        <EventBlock selectedDiv={selectedDiv} setSelectedDiv={setSelectedDiv} />
        <Futer selectedDiv={selectedDiv} />
      </Container>
    </AppWraper>
  );
}

export default App;
