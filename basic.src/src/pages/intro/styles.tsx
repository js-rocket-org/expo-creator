import { Image, Text, View } from 'react-native';
import appTheme from '../../theme';

// import styled from 'styled-components/native';

export const TitleText = (props) => {
  const { children, style, ...allProps } = props;
  const theme = appTheme;
  const defaultStyle = {
    color: `${theme.colors.secondary}`,
    fontSize: theme.fontSizes.large,
    fontWeight: 'bold',
  };
  return (
    <Text style={{ ...defaultStyle, ...style }} {...allProps}>
      {children}
    </Text>
  );
};

export const NormalTextWrapper = (props) => {
  const { children, style, ...allProps } = props;
  const theme = appTheme;
  const defaultStyle = {
    flex: 1,
    padding: `${theme.spacing.medium}px`,
    justifyContent: 'center',
    textalign: 'center',
  };
  return (
    <View style={{ ...defaultStyle, ...style }} {...allProps}>
      {children}
    </View>
  );
};

export const LogoWrapper = (props) => {
  const { children, style, ...allProps } = props;
  const defaultStyle = {
    flex: 1,
    flexDirection: 'row',
    maxHeight: 100,
    justifyContent: 'center',
    alignItems: 'center',
  };
  return (
    <View style={{ ...defaultStyle, ...style }} {...allProps}>
      {children}
    </View>
  );
};

export const LogoImage = (props) => {
  const { style, ...allProps } = props;
  const defaultStyle = {
    width: 80,
    height: 80,
  };
  return <Image style={{ ...defaultStyle, ...style }} {...allProps} />;
};

export const ButtonWrapper = (props) => {
  const { children, style, ...allProps } = props;
  const theme = appTheme;
  const defaultStyle = {
    padding: theme.spacing.medium,
  };
  return (
    <View style={{ ...defaultStyle, ...style }} {...allProps}>
      {children}
    </View>
  );
};

export const IntroText = (props) => {
  const { children, style, ...allProps } = props;
  const theme = appTheme;
  const defaultStyle = {
    color: theme.colors.secondary,
    fontSize: theme.fontSizes.medium,
    paddingHorizontal: theme.spacing.medium,
  };
  return (
    <Text style={{ ...defaultStyle, ...style }} {...allProps}>
      {children}
    </Text>
  );
};
