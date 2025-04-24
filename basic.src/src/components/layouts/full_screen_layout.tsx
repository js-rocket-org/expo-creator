import React, { FC } from 'react';
import { ImageBackground, ImageBackgroundProps, ImageSourcePropType, View, ViewProps } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect } from '@react-navigation/native';

import appTheme from '../../theme';

// types/interface
type ExtraFullScreenLayoutProps = {
  justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around';
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'stretch';
  onPageEnter?: () => void;
  onPageExit?: () => void;
  backgroundImageSrc?: ImageSourcePropType;
  resizeMode?: 'cover' | 'contain' | 'stretch' | 'repeat' | 'center';
};
type FullScreenLayoutProps = ExtraFullScreenLayoutProps & ViewProps;

const PageWrapper = (props) => {
  const { children, style, ...allProps } = props;
  const theme = appTheme;
  const defaultStyle = {
    flex: 1,
    margin: 0,
    padding: 0,
    backgroundColor: theme.colors.primary,
  };
  return (
    <View style={{ ...defaultStyle, ...style }} {...allProps}>
      {children}
    </View>
  );
};

const ImagePageWrapper = (props) => {
  const { children, style, resizeMode, source, ...allProps } = props;
  const defaultStyle = {
    flex: 1,
    margin: 0,
    padding: 0,
  };

  console.log(`resizeMode: ${resizeMode}`);
  return (
    <ImageBackground source={source} resizeMode={resizeMode} style={{ ...defaultStyle, ...style }} {...allProps}>
      {children}
    </ImageBackground>
  );
};

const ContentContainer = (props) => {
  const { children, style, ...allProps } = props;
  const defaultStyle = { flex: 1 };
  return (
    <SafeAreaView style={{ ...defaultStyle, ...style }} {...allProps}>
      {children}
    </SafeAreaView>
  );
};

export const FullScreenLayout: FC<FullScreenLayoutProps> = ({
  children,
  backgroundImageSrc,
  resizeMode,
  justifyContent = 'center',
  alignItems = 'center',
  style,
  onPageEnter,
  onPageExit,
}) => {
  useFocusEffect(
    React.useCallback(() => {
      if (onPageEnter) onPageEnter();
      return () => {
        if (onPageExit) onPageExit();
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []),
  );

  if (backgroundImageSrc) {
    return (
      <ImagePageWrapper source={backgroundImageSrc} resizeMode={resizeMode} style={style}>
        <ContentContainer style={{ justifyContent, alignItems }}>{children}</ContentContainer>
      </ImagePageWrapper>
    );
  }
  return (
    <PageWrapper style={style}>
      <ContentContainer style={{ justifyContent, alignItems }}>{children}</ContentContainer>
    </PageWrapper>
  );
};
