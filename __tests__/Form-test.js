import 'react-native';
import React from 'react';

import render from 'react-test-renderer';
import {expect} from '@jest/globals';

import {Form} from '../App/components/Form';

test('Button snapshot', () => {
  const snapShot = render.create(<Form />).toJSON();
  expect(snapShot).toMatchSnapshot();
});
