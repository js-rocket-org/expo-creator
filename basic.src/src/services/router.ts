// Abstraction of whatever navigation router is currently being used

import { useRoute } from '@react-navigation/native';
import { RelativePathString, Router, useRouter } from 'expo-router';


export type AppRouter = Router

// get a router object that can be used with the other functions below
export const getRouter = (): AppRouter => {
  return useRouter();
};

export const routeGetCurrentName = () => {
  const route = useRoute();
  return route.name;
}

export const routeCanGoBack = (router: AppRouter) => {
  return router.canGoBack();
}

export const routeGoBack  = (router: AppRouter) => {
  router.back();
}

export const routePush = (router: AppRouter, path: string, params?: object) => {
  router.push(path as RelativePathString, params);
};

export const routeReplace = (router: AppRouter, path: string, params?: object) => {
  router.replace(path as RelativePathString, params);
};
