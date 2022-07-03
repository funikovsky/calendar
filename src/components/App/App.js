import { useState } from 'react';
import { ChoiceDateBlock } from '../ChoceDateBlock';
import { Container } from '../Container';
import { EventBlock } from '../EventBlock';
import { Futer } from '../Futer';
import { Header } from '../Header';
import { AppWraper } from './AppWrapper';

function App() {
  const [selectedDiv, setSelectedDiv] = useState();
  const [activeDiv, setActiveDiv] = useState([]);

  const handleClickDel = (index) => {
    const arr = activeDiv.filter((item) => item !== index);
    setActiveDiv(arr);
    setSelectedDiv(null);
  };
  return (
    <AppWraper>
      <Container>
        <Header />
        <ChoiceDateBlock />
        <EventBlock
          selectedDiv={selectedDiv}
          setSelectedDiv={setSelectedDiv}
          activeDiv={activeDiv}
          setActiveDiv={setActiveDiv}
        />
        <Futer selectedDiv={selectedDiv} handleClickDel={handleClickDel} />
      </Container>
    </AppWraper>
  );
}

export default App;
