import styled from 'styled-components';

const PlusStyled = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Plus = () => {
  return (
    <PlusStyled onClick={() => prompt('Enter event time:', 'YYYY-MM-DD')}>
      <svg
        fill="red"
        enableBackground="new 0 0 80 80"
        height="100%"
        id="Icons"
        version="1.1"
        viewBox="0 0 80 80"
        width="100%"
        xmlns="http://www.w3.org/2000/svg">
        <polygon points="61,37 43,37 43,19 37,19 37,37 19,37 19,43 37,43 37,61 43,61 43,43 61,43 " />
      </svg>
    </PlusStyled>
  );
};
