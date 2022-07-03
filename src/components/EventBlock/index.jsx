import styled from 'styled-components';
import { DivStyled } from '../styled/DivStyled';

const EventBlockStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(24, 80px);
  div {
    border: 0.5px solid rgba(0, 0, 0, 0.3);
  }
`;
export const EventBlock = () => {
  return (
    <DivStyled>
      <EventBlockStyled>
        {[...new Array(192)].map((_, index) => (
          <div></div>
        ))}
      </EventBlockStyled>
    </DivStyled>
  );
};
