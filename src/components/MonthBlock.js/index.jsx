import { FlexBlock } from '../styled/FlexBlock';
import { Arrow } from '../styled/Arrow';

export const MonthBlock = () => {
  return (
    <FlexBlock>
      <Arrow />
      <span>March 2019</span>
      <Arrow rotate="true" />
    </FlexBlock>
  );
};
