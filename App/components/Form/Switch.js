import React from 'react';
import {Switch} from 'react-native';

import FeildWrapper from './FeildWrapper';

export default ({label, message, messageType, ...otherProps}) => (
  <FeildWrapper label={label} message={message} messageType={messageType}>
    <Switch {...otherProps} />
  </FeildWrapper>
);
