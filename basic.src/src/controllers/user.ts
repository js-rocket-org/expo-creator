// authentication related functions
import { NavigationProp } from '@react-navigation/native';

import { StorageKeys } from '../constants';
import { writeString } from '../utils/storage';
import { ApiErrorHandler, apiPost } from '../utils/http_client';
import { JSON_parse } from '../utils/converters';
import { TUserModel } from '../models/user';
import { Routes } from '../routes/routes';
import { AppRouter, routeReplace } from '@/services/router';

export type LoginResponse = {
  firstname: string;
  token: string;
  refreshToken: string;
};

const setUserDetails = async (tokenPair: string, username: string) => {
  await writeString(StorageKeys.AUTH_TOKEN_PAIR, tokenPair);
  await writeString(StorageKeys.USER_NAME, username);
};

export class UserCtrl {
  _userModel?: TUserModel;

  constructor(u?: TUserModel) {
    this._userModel = u;
  }

  // Returns true on signin success otherwise false, if false errorHandler is called to provide user feedback
  signIn = async (email: string, pass: string, errorHandler: ApiErrorHandler | null): Promise<boolean> => {
    // Fake successful login
    const tokenPair2 = 'sjdasdakdadadad\tdfsdfsfsfsfdsf';
    this._userModel?.setUserDetails({ firstname: 'John', email: 'john@example.com', token: tokenPair2 });
    await setUserDetails(tokenPair2, 'John');
    // This will always be true.
    if (tokenPair2.length > 0) return true;

    const requestBody = { authLogin: { email, pass } };

    const response = await apiPost('/jsonql', requestBody, errorHandler, false);

    if (response === null) return false;

    const loginData = JSON_parse(response.result ?? '') as {
      authLogin: LoginResponse | string;
    };
    if (!loginData || typeof loginData.authLogin === 'string') {
      const errorMessage = typeof loginData.authLogin === 'string' ? loginData.authLogin : 'Unknown error';
      if (typeof errorHandler === 'function') errorHandler(errorMessage);
      return false;
    }

    const loginDetails = loginData.authLogin;

    const tokenPair = `${loginDetails.token}\t${loginDetails.refreshToken}`;

    this._userModel?.setUserDetails({
      firstname: loginDetails.firstname,
      email: email.toLowerCase(),
      token: tokenPair,
    });

    await setUserDetails(tokenPair, loginDetails.firstname);

    return true;
  };

  signOut = async (router: AppRouter) => {
    await setUserDetails('', '');

    this._userModel?.setUserDetails({ firstname: '', email: '', token: '' });

    routeReplace(router, '/login')
  };
}
