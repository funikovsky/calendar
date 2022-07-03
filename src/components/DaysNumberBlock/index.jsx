import React from 'react';
import { daysNumber } from '../../common/constans';
import { ActiveSpan } from '../styled/activeSpan';
import { UlStyled } from '../styled/UlStyled';

export const DaysNumberBlock = () => {
  let today = 6;
  return (
    <UlStyled display={'flex'} jc={'space-between'} fs={'30px'}>
      {daysNumber.map((items, index) => (
        <li key={index}>
          <ActiveSpan active={items === today}>{items}</ActiveSpan>
        </li>
      ))}
    </UlStyled>
  );
};
