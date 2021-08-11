import React from 'react';

import styled from 'styled-components/native';

import colors from '../../config/colors';

import FeildWrapper from './FeildWrapper';

const Input = styled.TextInput`
  font-size: 14px;
  font-weight: 500;
  padding-bottom: 10px;
`;

const Boarder = styled.View`
  height: 1px;
  background-color: ${colors.border};
`;

export default ({label, message, messageType, ...otherProps}) => (
  <FeildWrapper label={label} message={message} messageType={messageType}>
    <Input {...otherProps} />
    <Boarder />
  </FeildWrapper>
);
