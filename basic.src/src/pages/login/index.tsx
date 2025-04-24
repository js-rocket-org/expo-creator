// DESCRIPTION: The page to login to the app

import React from 'react';
import { useState } from 'react';
import { Text } from 'react-native';

import { Button } from '../../components/button';
import { Input } from '../../components/input';
import * as Icons from '../../components/a_icons';
import { BusyIndicator } from '../../components/busy_indicator';
import { isValidEmail } from '../../utils/validators';
import {
  ButtonText,
  ButtonTextWrapper,
  ErrorText,
  LoginFormWrapper,
  StyledHeaderFooterLayout,
  SubmitButtonWrapper,
  UnicodeIcon,
} from './styles';
import { displayDate } from '../../utils/formatters';
import { useUserModel } from '../../models/user';
import { delay } from '../../utils/helpers';
import appTheme from '../../theme';
import { getRouter, routeReplace } from '@/services/router';
import { HeaderFooterLayout } from '@/components/layouts/header_footer_layout';

const println = console.log;

const initialFormField = {
  email: 'js+dev8@rokt.io',
  pass: 'Helloworld',
};

const initialFormErrors = {
  email: '',
  pass: '',
};


export const LoginPage = () => {
  const theme = appTheme;
  const [loginError, setLoginError] = useState('');
  const [isBusy, setBusy] = useState(false);
  const userModel = useUserModel();
  const userActions = userModel.actions();

  const [form, setForm] = useState(initialFormField);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const router = getRouter();

  const isFormValid = (finalForm: typeof initialFormField) => {
    let hasErrors = false;

    const newErrors = { ...initialFormErrors };
    if (!isValidEmail(finalForm.email)) {
      newErrors.email = 'Email is invalid';
      hasErrors = true;
    }
    if (finalForm.pass.trim().length === 0) {
      newErrors.pass = 'Password can not be blank';
      hasErrors = true;
    }

    if (!hasErrors) return true;

    setFormErrors({ ...newErrors });
    return false;
  };

  const loginErrorHandler = (message: string) => {
    setBusy(false);
    setLoginError(message);
  };

  const updateForm = (_assignment: string) => {
    setFormErrors(initialFormErrors);
    setLoginError('');
    setForm({ ...form });
  };

  // #### Event handlers
  const onPageEnter = () => {
    println(`LoginPage:onPageEnter ${new Date()}`);
  };

  const onChangeField = {
    email: (val: string) => updateForm(form.email = val),
    pass: (val: string) => updateForm(form.pass = val),
  };

  const onPressLogin = async () => {
    setLoginError('');
    if (!isFormValid(form)) return false;

    setBusy(true);

    const loginSuccess = await userActions.signIn(form.email, form.pass, loginErrorHandler);
    if (!loginSuccess) return;

    await delay(3000); // for debugging
    setBusy(false);

    // clear inputs after successful login
    setForm(initialFormField);

    return routeReplace(router, '/settings');
  };

  return (
    <HeaderFooterLayout onPageEnter={onPageEnter}>
      <LoginFormWrapper>
        {isBusy && <BusyIndicator />}
        <UnicodeIcon>{'\u{2386}'}</UnicodeIcon>

        <Text>{displayDate(new Date())}</Text>

        <Input
          placeholder='Email'
          value={form.email}
          onChangeText={onChangeField.email}
          errorMessage={formErrors.email}
          keyboardType='email-address'
        />
        <Input
          placeholder='Password'
          value={form.pass}
          onChangeText={onChangeField.pass}
          errorMessage={formErrors.pass}
          secureTextEntry={true}
        />

        <ErrorText>{loginError}</ErrorText>

        <SubmitButtonWrapper>
          <Button onPress={onPressLogin}>
            <ButtonTextWrapper>
              <ButtonText>Login</ButtonText>
              <Icons.Login fill={theme.colors.secondary} />
            </ButtonTextWrapper>
          </Button>
        </SubmitButtonWrapper>
      </LoginFormWrapper>
    </HeaderFooterLayout>
  );
};
