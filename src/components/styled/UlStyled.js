import styled from 'styled-components';

export const UlStyled = styled.ul`
  display: ${(props) => props.display};
  justify-content: ${(props) => props.jc};
  align-items: ${(props) => props.ai};

  li {
    width: 40px;
    text-align: center;
    span {
      font-size: ${(props) => (props.fs ? props.fs : '')};
    }
  }
`;
