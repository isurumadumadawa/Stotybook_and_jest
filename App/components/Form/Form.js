import React from 'react';

import styled from 'styled-components/native';

import colors from '../../config/colors';

const FormWrapper = styled.View`
  margin-horizontal: 20px;
  flex: 1;
`;

const HeaderWrapper = styled.View`
  margin-bottom: 28px;
`;

const Header = styled.Text`
  color: ${colors.primary};
  font-weight: 600;
  font-size: 32px;
  margin-bottom: 12px;
`;

const SubHeader = styled.Text`
  color: ${colors.gray};
  font-size: 20px;
  margin-bottom: 12px;
`;

export default ({children, header, subheader}) => (
  <FormWrapper>
    {(header || subheader) && (
      <HeaderWrapper>
        {header && <Header>{header}</Header>}
        {subheader && <SubHeader>{subheader}</SubHeader>}
      </HeaderWrapper>
    )}

    {children}
  </FormWrapper>
);
