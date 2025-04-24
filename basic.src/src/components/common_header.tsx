import React from 'react';
import { View } from 'react-native';
import appTheme from '../theme';

interface CommonHeaderProps {
  itemLeft?: React.ReactElement;
  itemCenter?: React.ReactElement;
  itemRight?: React.ReactElement;
}

export const HeaderWrapper = (props) => {
  const { children, style, ...allProps } = props;
  const theme = appTheme;
  const defaultStyle = {
    width: '100%',
    height: '64px',
    padding: '0 5px',
    margin: 0,
    flexDirection: 'row',
    backgroundColor: theme.colors.primary,
  };
  return (
    <View style={{ ...defaultStyle, ...style }} {...allProps}>
      {children}
    </View>
  );
};

export const HeaderLeft = (props) => {
  const { children, style, ...allProps } = props;
  const defaultStyle = {
    flex: 1,
    justifyContent: 'center',
  };
  return (
    <View style={{ ...defaultStyle, ...style }} {...allProps}>
      {children}
    </View>
  );
};

export const HeaderCenter = (props) => {
  const { children, style, ...allProps } = props;
  const defaultStyle = {
    flex: 4,
    justifyContent: 'center',
  };
  return (
    <View style={{ ...defaultStyle, ...style }} {...allProps}>
      {children}
    </View>
  );
};

export const HeaderRight = (props) => {
  const { children, style, ...allProps } = props;
  const defaultStyle = {
    flex: 1,
    justifyContent: 'center',
  };
  return (
    <View style={{ ...defaultStyle, ...style }} {...allProps}>
      {children}
    </View>
  );
};

export const CommonHeader = ({ itemLeft, itemCenter, itemRight }: CommonHeaderProps) => {
  return (
    <HeaderWrapper>
      <HeaderLeft>{itemLeft}</HeaderLeft>
      <HeaderCenter>{itemCenter}</HeaderCenter>
      <HeaderRight>{itemRight}</HeaderRight>
    </HeaderWrapper>
  );
};
