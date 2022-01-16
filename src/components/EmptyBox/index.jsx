import React from 'react';

import DefaultLogo from '../DefaultLogo';
import { StyledEmptyBoxContainer, StyledEmptyBoxText } from './style';

function EmptyBox() {
  return (
    <StyledEmptyBoxContainer>
      <DefaultLogo width={100} height={100} logoName='type-3-4' />
      <StyledEmptyBoxText>정보가 없습니다.</StyledEmptyBoxText>
    </StyledEmptyBoxContainer>
  );
}

export default EmptyBox;
