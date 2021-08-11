import React from 'react';

import styled from 'styled-components/native';

import colors from '../../config/colors';

const FeildWrapper = styled.View`
  margin-bottom: 20px;
`;

const Label = styled.Text`
  color: ${colors.gray};
  font-size: 18px;
  margin-bottom: 10px;
`;

const MessageText = styled.Text`
  color: ${colors.gray};
  font-size: 13px;
  margin-top: 5px;
`;

const MessageSuccess = styled(MessageText)`
  color: ${colors.success};
`;

const MessageError = styled(MessageText)`
  color: ${colors.error};
`;

export default ({children, label = '', message = '', messageType}) => {
  let Message = MessageText;

  if (messageType == 'success') {
    Message = MessageSuccess;
  } else if (messageType == 'error') {
    Message = MessageError;
  }

  return (
    <FeildWrapper>
      <Label>{label}</Label>
      {children}
      <Message>{message}</Message>
    </FeildWrapper>
  );
};
