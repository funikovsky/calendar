import styled from 'styled-components';

const HoursBlockStyled = styled.div`
  display: grid;
  position: relative;

  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(8, 80px);
  align-items: center;
  margin-top: 40px;
  span {
    color: #afaeae;
    min-width: 64px;
  }
`;

export const HoursBloc = () => {
  return (
    <HoursBlockStyled>
      <span>06-00</span>
      <span>07-00</span>
      <span>08-00</span>
      <span>09-00</span>
      <span>10-00</span>
      <span>11-00</span>
    </HoursBlockStyled>
  );
};
