import React, { FC } from 'react';
import { Text, View, ViewProps } from 'react-native';

import { FullScreenLayout } from './full_screen_layout';
import { CommonHeader } from '@/components/common_header';
import { Button } from '@/components/button';
import appTheme from '@/theme';
import { getRouter, routeCanGoBack, routeGetCurrentName, routeGoBack, routePush } from '@/services/router';

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
const ButtonText = (props: any) => {
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

const StyledBody = (props: any) => {
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
    routePush(router, '/settings');
  };

  const currentRouteName = routeGetCurrentName();

  const showGoBack = router && routeCanGoBack(router) && showBack;
  // only show menu button if not in settings screen
  const showMenuButton = showMenu && currentRouteName !== '/settings';

  const BACKBUTTON_UICON = '\u304F';
  const MENUBUTTON_UICON = '\u2630';

  return (
    <FullScreenLayout onPageEnter={onPageEnter} onPageExit={onPageExit}>
      <CommonHeader
        itemLeft={showGoBack
          ? (
            <Button backgroundColor={theme.colors.primary} onPress={onPressBack}>
              <ButtonText>{BACKBUTTON_UICON}</ButtonText>
            </Button>
          )
          : null}
        itemCenter={<ButtonText>{' ' || `Route: ${currentRouteName}`}</ButtonText>}
        itemRight={showMenuButton
          ? (
            <Button backgroundColor={theme.colors.primary} onPress={onPressMenu}>
              <ButtonText>{MENUBUTTON_UICON}</ButtonText>
            </Button>
          )
          : null}
      />
      <StyledBody justifyContent={justifyContent} alignItems={alignItems} style={style}>
        {children}
      </StyledBody>
    </FullScreenLayout>
  );
};
