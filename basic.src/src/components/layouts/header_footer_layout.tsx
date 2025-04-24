import React, { FC } from 'react';
import { Text, View, ViewProps } from 'react-native';
// import { useNavigation, useRoute } from '@react-navigation/native';

import { FullScreenLayout } from './full_screen_layout';
import { CommonHeader } from '../common_header';
import { Button } from '../button';
import { Routes } from '../../routes/routes';
import appTheme from '../../theme';
import {  getRouter, routeCanGoBack, routeGetCurrentName, routeGoBack, routePush } from '@/services/router';

// ### type/interface
type ExtraHeaderFooterLayoutProps = {
  justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around';
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'stretch';
  onPageEnter?: () => void;
  onPageExit?: () => void;
  showMenu?: boolean;
  showBack?: boolean;
};
type HeaderFooterLayoutProps = ViewProps & ExtraHeaderFooterLayoutProps;

// ### Styles
const ButtonText = (props) => {
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

const StyledBody = (props) => {
  const { children, style, ...allProps } = props;
  const theme = appTheme;
  const defaultStyle = {
    flex: 1,
    backgroundColor: theme.colors.primary,
  };
  return (
    <View style={{ ...defaultStyle, ...style }} {...allProps}>
      {children}
    </View>
  );
};

// ### HeaderFooterLayout Component
export const HeaderFooterLayout: FC<HeaderFooterLayoutProps> = ({
  style,
  children,
  justifyContent = 'center',
  alignItems = 'center',
  showBack = true,
  showMenu = true,
  onPageEnter,
  onPageExit,
}) => {
  // const navigation = useNavigation();
  // const route = useRoute();
  const router = getRouter();
  const theme = appTheme;

  const onPressBack = () => {
    if (routeCanGoBack(router)) routeGoBack(router);
  };

  const onPressMenu = () => {
    routePush(router, '/settings')
  };

  const currentRouteName = routeGetCurrentName();

  const showGoBack = router && routeCanGoBack(router) && showBack;
  // only show menu button if not in settings screen
  const showMenuButton = showMenu && currentRouteName !== Routes.Settings;

  return (
    <FullScreenLayout onPageEnter={onPageEnter} onPageExit={onPageExit}>
      <CommonHeader
        itemLeft={showGoBack
          ? (
            <Button backgroundColor={theme.colors.primary} onPress={onPressBack}>
              <ButtonText>{'\u{304F}'}</ButtonText>
            </Button>
          )
          : <></>}
        itemCenter={<ButtonText>{' ' || `Route: ${currentRouteName}`}</ButtonText>}
        itemRight={showMenuButton
          ? (
            <Button backgroundColor={theme.colors.primary} onPress={onPressMenu}>
              <ButtonText>{'\u{2630}'}</ButtonText>
            </Button>
          )
          : <></>}
      />
      <StyledBody justifyContent={justifyContent} alignItems={alignItems} style={style}>
        {children}
      </StyledBody>
    </FullScreenLayout>
  );
};
