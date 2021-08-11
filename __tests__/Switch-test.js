import 'react-native';
import React from 'react';

import render from 'react-test-renderer';
import {expect} from '@jest/globals';

import {Switch} from '../App/components/Form';

test('Button snapshot', () => {
  const snapShot = render.create(<Switch />).toJSON();
  expect(snapShot).toMatchSnapshot();
});
