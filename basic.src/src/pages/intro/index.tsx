import React from 'react';

import { Button } from '@/components/button';
import * as Svgimages from '@/components/a_svg';
import { FullScreenLayout } from '@/components/layouts/full_screen_layout';
import { ButtonWrapper, IntroText, LogoImage, LogoWrapper, NormalTextWrapper, TitleText } from './styles';
import { getRouter, routePush } from '@/services/router';

export const IntroPage = () => {
  const router = getRouter();

  const onPressNext = () => {
    routePush(router, '/login');
  };

  return (
    <FullScreenLayout
      backgroundImageSrc={require('../../assets/png/clouds.png')}
      resizeMode='cover'
      alignItems='center'
      // style={{ borderWidth: 1, borderColor: 'gold' }}
    >
      <TitleText>App Introduction</TitleText>
      <NormalTextWrapper>
        <LogoWrapper>
          <LogoImage source={require('../../assets/png/rl_logo.jpg')} />
          <Svgimages.Tux fill='black' width={80} height={80} />
        </LogoWrapper>
        <IntroText>
          This is a small react native template
          {'\n\n'}
          It uses uses the bare minimum number of external packages to create an application that has basic navigation,
          state management and local storage
          {'\n\n'}
          {/* </IntroText> <IntroText>*/}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </IntroText>
      </NormalTextWrapper>
      <ButtonWrapper>
        <Button onPress={onPressNext}>OK</Button>
      </ButtonWrapper>
    </FullScreenLayout>
  );
};
