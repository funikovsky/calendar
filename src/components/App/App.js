import { ChoiceDateBlock } from '../ChoceDateBlock';
import { Container } from '../Container';
import { EventBlock } from '../EventBlock';
import { Header } from '../Header';
import { AppWraper } from './AppWrapper';

function App() {
  return (
    <AppWraper>
      <Container>
        <Header />
        <ChoiceDateBlock />
        <EventBlock />
      </Container>
    </AppWraper>
  );
}

export default App;
