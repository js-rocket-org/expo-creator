// standard app button

import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import appTheme from '../theme';

// ### Type / interface
type StyledButtonProps = TouchableOpacityProps & { color?: string; backgroundColor?: string };

// ### Styles
const StyledButton = (props) => {
  const { children, style, backgroundColor, ...allProps } = props;
  const theme = appTheme;
  const defaultStyle = {
    minWidth: '100%',
    paddingTop: theme.spacing.small,
    paddingBottom: theme.spacing.small,
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: backgroundColor ? backgroundColor : theme.colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: theme.borderRadius.small,
  };
  return (
    <TouchableOpacity style={{ ...defaultStyle, ...style }} {...allProps}>
      {children}
    </TouchableOpacity>
  );
};

const ButtonText = (props) => {
  const { children, style, color, ...allProps } = props;
  const theme = appTheme;
  const defaultStyle = {
    color: color ? color : theme.colors.secondary,
    fontSize: theme.fontSizes.medium,
  };
  return (
    <Text style={{ ...defaultStyle, ...style }} {...allProps}>
      {children}
    </Text>
  );
};

// ### Button Component
export const Button = ({ color, backgroundColor, ...props }: StyledButtonProps) => {
  return (
    <StyledButton onPress={props.onPress} backgroundColor={backgroundColor}>
      {typeof props.children === 'string' ? <ButtonText color={color}>{props.children}</ButtonText> : props.children}
    </StyledButton>
  );
};
