// import styled from 'styled-components/native';
import { Image, Text, View } from 'react-native';
import { SPLASH_BACKGROUND_COLOR } from '../../constants';

export const SplashPageWrapper = (props) => {
  const { children, ...allProps } = props;
  const defaultStyle = {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: SPLASH_BACKGROUND_COLOR,
  };
  return <View style={{ ...defaultStyle, ...allProps }}>{children}</View>;
};

export const SplashPageLogo = (props) => {
  const { style, ...allProps } = props;
  const defaultStyle = {
    width: 100,
    height: 100,
  };
  return <Image style={{ ...defaultStyle, ...style }} {...allProps} />;
};

export const SplashPageText = (props) => {
  const { children, style, ...allProps } = props;
  const defaultStyle = {
    color: 'black',
    fontSize: 24,
  };
  return (
    <Text style={{ ...defaultStyle, ...style }} {...allProps}>
      {children}
    </Text>
  );
};
