import { FlexBlock } from '../styled/FlexBlock';
import { Plus } from '../svg/Plus';

export const Header = () => {
  return (
    // ------ p = padding -------
    <FlexBlock p={'50px'}>
      <h4>Interview Calendar</h4>
      <Plus />
    </FlexBlock>
  );
};
