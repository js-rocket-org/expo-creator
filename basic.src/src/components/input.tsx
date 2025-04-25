// standard app input field

import React from 'react';
import { Text, TextInput, TextInputProps } from 'react-native';
import appTheme from '../theme';

// ### Type / interface
type StyledTextInputProps = TextInputProps & { errorMessage?: string };

// ### Styles
const StyleTextInput = (props: any) => {
  const { children, style, errorMessage, ...allProps } = props;
  const theme = appTheme;
  const defaultStyle = {
    minWidth: '100%',
    backgroundColor: theme.colors.shades.white,
    color: theme.colors.shades.black,
    borderRadius: theme.borderRadius.small,
    borderColor: errorMessage ? theme.colors.accent : theme.colors.shades.black,
    padding: theme.spacing.small,
    fontSize: theme.fontSizes.medium,
  };
  return (
    <TextInput style={{ ...defaultStyle, ...style }} {...allProps}>
      {children}
    </TextInput>
  );
};

const ErrorText = (props: any) => {
  const { children, style, ...allProps } = props;
  const theme = appTheme;
  const defaultStyle = {
    color: theme.colors.accent,
    fontSize: theme.fontSizes.medium,
  };
  return (
    <Text style={{ ...defaultStyle, ...style }} {...allProps}>
      {' '}
      {children}
      {' '}
    </Text>
  );
};

// ### Input Component
export const Input = ({ errorMessage = '', ...props }: StyledTextInputProps) => {
  return (
    <>
      <StyleTextInput underlineColorAndroid='white' {...props} />
      {errorMessage.trim() && <ErrorText>{errorMessage}</ErrorText>}
    </>
  );
};
