import styled from 'styled-components';

export const ActiveSpan = styled.span`
  background-color: ${(props) => (props.active ? 'red' : '')};
  border-radius: 50%;
  display: block;
  width: 40px;
  height: 40px;
`;
