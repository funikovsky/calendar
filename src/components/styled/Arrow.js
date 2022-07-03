import styled from 'styled-components';

export const Arrow = styled.div`
  width: 15px;
  height: 15px;
  border-top: 3px solid red;
  border-right: 3px solid red;
  transform: rotate(${(props) => (props.rotate ? '45deg' : '-135deg')});
`;
