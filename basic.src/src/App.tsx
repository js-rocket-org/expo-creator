import React, { useEffect, useState } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import MainNavigation from './routes/main';
// import {lightTheme, darkTheme} from './theme';
import { SplashPage } from './pages/splash';
import { AppConfigContextProvider, useAppConfigModel } from './models/app_config';
import { UserContextProvider } from './models/user';

const styles = StyleSheet.create({
  viewWrapper: {
    backgroundColor: 'green',
    height: '100%',
    width: '100%',
  },
});

const InnerApp = () => {
  const { isDarkmode } = useAppConfigModel();

  return (
    <View style={styles.viewWrapper}>
      <StatusBar barStyle={isDarkmode ? 'dark-content' : 'light-content'} />
      <MainNavigation />
    </View>
  );
};

//  Show the splash page before anything else begins
const App = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(false);
    setTimeout(() => {
      // Do your startup stuff here, then setIsReady to true when you want to stop showing your splashscreen
      setIsReady(true);
    }, 0);
  }, []);

  return !isReady ? <SplashPage /> : (
    <SafeAreaProvider>
      <AppConfigContextProvider>
        <UserContextProvider>
          <InnerApp />
        </UserContextProvider>
      </AppConfigContextProvider>
    </SafeAreaProvider>
  );
};

export default App;
