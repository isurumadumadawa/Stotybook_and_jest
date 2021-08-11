import 'react-native';
import React from 'react';

import render from 'react-test-renderer';
import {expect} from '@jest/globals';

import {Button} from '../App/components/Button';

test('Button snapshot', () => {
  const snapShot = render.create(<Button />).toJSON();
  expect(snapShot).toMatchSnapshot();
});
