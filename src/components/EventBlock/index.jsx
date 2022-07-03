import { useState } from 'react';
import styled from 'styled-components';
import { HoursBloc } from '../HoursBlock';
import { DivStyled } from '../styled/DivStyled';

const EventBlockStyled = styled.div`
  flex: 0 90%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(7, 80px);

  & > div {
    border-right: 0.5px solid rgba(0, 0, 0, 0.3);
    border-bottom: 0.5px solid rgba(0, 0, 0, 0.3);
  }
`;
export const EventBlock = ({ selectedDiv, setSelectedDiv }) => {
  const [activeDiv, setActiveDiv] = useState([]);

  const handleClick = (index) => {
    if (!activeDiv.includes(index)) {
      setActiveDiv((prev) => [...prev, index]);
    } else {
      if (index === selectedDiv) {
        setSelectedDiv(null);
      } else {
        setSelectedDiv(index);
      }
    }
  };
  return (
    <DivStyled>
      <HoursBloc />
      <EventBlockStyled>
        {[...new Array(49)].map((_, index) => (
          <DivStyled
            active={activeDiv.includes(index)}
            selected={selectedDiv === index}
            key={index}
            onClick={() => handleClick(index)}>
            <span></span>
          </DivStyled>
        ))}
      </EventBlockStyled>
    </DivStyled>
  );
};
