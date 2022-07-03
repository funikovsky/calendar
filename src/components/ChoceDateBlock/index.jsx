import styled from 'styled-components';
import { DaysBlock } from '../DaysBlock';
import { DaysNumberBlock } from '../DaysNumberBlock';
import { MonthBlock } from '../MonthBlock.js';
import { CenterBlock } from '../styled/CenterBlock';

const ChoiceDateBlockStyled = styled.div`
  min-height: 166px;
  background-color: #dbd9d9;
  border-bottom: 1px solid #afaeae;
  border-top: 2px solid #afaeae;
  padding: 3% 3% 3% 12%;
`;

export const ChoiceDateBlock = () => {
  return (
    <ChoiceDateBlockStyled>
      <CenterBlock>
        <DaysBlock />
        <DaysNumberBlock />
        <MonthBlock />
      </CenterBlock>
    </ChoiceDateBlockStyled>
  );
};
