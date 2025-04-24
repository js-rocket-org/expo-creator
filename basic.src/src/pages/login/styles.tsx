// import styled from 'styled-components/native';
import { Text, View } from 'react-native';
import appTheme from '../../theme';


export const LoginFormWrapper = (props) => {
  const { children, style, ...allProps } = props;
  const theme = appTheme;
  const defaultStyle = {
    flex: 1,
    padding: theme.spacing.medium,
    justifyContent: 'center',
    alignItems: 'center',
    gap: theme.spacing.medium,
  };
  return (
    <View style={{ ...defaultStyle, ...style }} {...allProps}>
      {children}
    </View>
  );
};

export const UnicodeIcon = (props) => {
  const { children, style, ...allProps } = props;
  const defaultStyle = {
    fontSize: 60,
    color: 'green',
  };
  return (
    <Text style={{ ...defaultStyle, ...style }} {...allProps}>
      {children}
    </Text>
  );
};

export const ButtonTextWrapper = (props) => {
  const { children, style, ...allProps } = props;
  const theme = appTheme;
  const defaultStyle = {
    flexDirection: 'row',
    aligItems: 'center',
    gap: theme.spacing.small,
  };
  return (
    <View style={{ ...defaultStyle, ...style }} {...allProps}>
      {children}
    </View>
  );
};

export const ButtonText = (props) => {
  const { children, style, ...allProps } = props;
  const theme = appTheme;
  const defaultStyle = {
    color: theme.colors.secondary,
    fontSize: theme.fontSizes.medium,
  };
  return (
    <Text style={{ ...defaultStyle, ...style }} {...allProps}>
      {children}
    </Text>
  );
};

export const ErrorText = (props) => {
  const { children, style, ...allProps } = props;
  const theme = appTheme;
  const defaultStyle = {
    color: theme.colors.accent,
    fontSize: theme.fontSizes.medium,
  };
  return (
    <Text style={{ ...defaultStyle, ...style }} {...allProps}>
      {children}
    </Text>
  );
};

export const SubmitButtonWrapper = (props) => {
  const { children, style, ...allProps } = props;
  const defaultStyle = {
    width: '50%',
  };
  return (
    <View style={{ ...defaultStyle, ...style }} {...allProps}>
      {children}
    </View>
  );
};
