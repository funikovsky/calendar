import { daysNames } from '../../common/constans';
import { UlStyled } from '../styled/UlStyled';

export const DaysBlock = () => {
  return (
    <>
      <UlStyled display={'flex'} jc={'space-between'}>
        {daysNames.map((items, index) => (
          <li key={index}>
            <span>{items}</span>
          </li>
        ))}
      </UlStyled>
    </>
  );
};
