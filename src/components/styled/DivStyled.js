import styled from 'styled-components';

export const DivStyled = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  & > span {
    display: block;
    width: 100%;
    margin: 2px;
    background-color: ${(props) => (props.active ? 'rgba(0, 0, 255, 0.3)' : '')};
    background-color: ${(props) => (props.selected ? 'rgba(0, 0, 255)' : '')};
  }
`;
