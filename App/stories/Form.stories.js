import React from 'react';
import {View, Text} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';

import {Form, FeildWrapper, TextInput, Switch} from '../components/Form';
import {BufferView} from './decorators';

storiesOf('Form/Switch', module)
  .addDecorator(BufferView)
  .add('default', () => <Switch label="Agree to Terms" value />)
  .add('with error', () => (
    <Switch
      label="Agree to Terms"
      message="You must agree to the terms"
      messageType="error"
    />
  ));

const defaultTextInputProps = {
  label: 'Demo',
  onchangeText: action('onChangeText'),
};

storiesOf('Form/TextInput', module)
  .addDecorator(BufferView)
  .add('default', () => <TextInput {...defaultTextInputProps} />)
  .add('with placeholder', () => (
    <TextInput {...defaultTextInputProps} placeholder="demo placeholder" />
  ))
  .add('with value', () => (
    <TextInput {...defaultTextInputProps} value="hello value" />
  ))
  .add('with error message', () => (
    <TextInput
      {...defaultTextInputProps}
      message="This is an error"
      messageType="error"
    />
  ))
  .add('email', () => (
    <TextInput
      {...defaultTextInputProps}
      label="email"
      value="Isurumadhumadhawa330722@gmail.com"
      keyboardType="email-address"
    />
  ))
  .add('password', () => (
    <TextInput
      {...defaultTextInputProps}
      label="password"
      value="password"
      secureTextEntry
    />
  ));

storiesOf('Form/FeildWrapper', module)
  .addDecorator(BufferView)
  .add('default', () => (
    <FeildWrapper label="Email">
      <Text>Hello, wrapper</Text>
    </FeildWrapper>
  ))
  .add('error message', () => (
    <FeildWrapper
      label="Email"
      message="please enter a valid email"
      messageType="error">
      <Text>Hello, wrapper</Text>
    </FeildWrapper>
  ))
  .add('success message', () => (
    <FeildWrapper label="Email" message="Looks legited" messageType="success">
      <Text>Hello, wrapper</Text>
    </FeildWrapper>
  ))
  .add('multiple feilds', () => (
    <React.Fragment>
      <FeildWrapper label="Email">
        <Text>Hello, wrapper</Text>
      </FeildWrapper>
      <FeildWrapper
        label="Email"
        message="please enter a valid email"
        messageType="error">
        <Text>Hello, wrapper</Text>
      </FeildWrapper>
      <FeildWrapper label="Email" message="Looks legited" messageType="success">
        <Text>Hello, wrapper</Text>
      </FeildWrapper>
    </React.Fragment>
  ));

storiesOf('Form', module)
  .addDecorator(BufferView)
  .add('default', () => (
    <Form>
      <View style={{flex: 1, backgroundColor: '#c6e6e6'}} />
    </Form>
  ))
  .add('with header', () => (
    <Form header="Hello.">
      <View style={{flex: 1, backgroundColor: '#c6e6e6'}} />
    </Form>
  ))
  .add('with header and subheader', () => (
    <Form
      header="Hello."
      subheader="Welcome back. kindly enter your login details">
      <View style={{flex: 1, backgroundColor: '#c6e6e6'}} />
    </Form>
  ));
