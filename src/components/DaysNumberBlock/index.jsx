import React from 'react';
import { daysNumber } from '../../common/constans';
import { UlStyled } from '../styled/UlStyled';

export const DaysNumberBlock = () => {
  return (
    <UlStyled display={'flex'} jc={'space-between'} fs={'30px'}>
      {daysNumber.map((items, index) => (
        <li key={index}>
          <span>{items}</span>
        </li>
      ))}
    </UlStyled>
  );
};
