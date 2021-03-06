import styled from 'styled-components';
export const FlexBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.jc ? props.jc : 'space-between')};
  padding: ${(props) => props.p};
  min-height: ${(props) => props.mh};
  background-color: ${(props) => props.bgclr};
  border-top: ${(props) => props.brdtop};
`;
