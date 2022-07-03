import { FlexBlock } from '../styled/FlexBlock';
import { SpanStyled } from '../styled/SpanStyled';

export const Futer = ({ selectedDiv, handleClickDel }) => {
  return (
    <FlexBlock mh={'120px'} p={'20px 50px'} bgclr="#dbd9d9" brdtop="2px solid #afaeae">
      <SpanStyled color="red" fs="36px">
        Today
      </SpanStyled>
      {selectedDiv && (
        <SpanStyled color="red" fs="36px" onClick={() => handleClickDel(selectedDiv)}>
          Delete
        </SpanStyled>
      )}
    </FlexBlock>
  );
};
