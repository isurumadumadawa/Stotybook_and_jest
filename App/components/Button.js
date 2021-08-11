import React from 'react';

import styled from 'styled-components/native';

import colors from '../config/colors';

const ButtonWrapper = styled.TouchableOpacity`
  background-color: ${colors.primary};
  padding-vertical: 14px;
  border-radius: 6px;
  border-width: 1px;
  border-color: ${colors.primary};
  margin-vertical: 7px;
`;

const ButtonWrapperOutline = styled(ButtonWrapper)`
  background-color: transparent;
  border-color: ${colors.border};
`;

const ButtonText = styled.Text`
  color: ${colors.white};
  align-self: center;
  font-size: 18px;
  font-weight: 500;
`;

const ButtonTextOutline = styled(ButtonText)`
  color: ${colors.primary};
`;

export const Button = ({
  onPress = () => {},
  children = '',
  outline = false,
}) => {
  const Button = outline ? ButtonWrapperOutline : ButtonWrapper;
  const Text = outline ? ButtonTextOutline : ButtonText;

  return (
    <Button onPress={onPress}>
      <Text>{children}</Text>
    </Button>
  );
};
