import React from 'react';
import { ActivityIndicator, Modal, View } from 'react-native';
import appTheme from '../theme';

const BusyContainer = (props) => {
  const { children, style, ...allProps } = props;
  const theme = appTheme;
  const defaultStyle = {
    position: 'absolute',
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.loadingOverlay,
  };
  return (
    <View style={{ ...defaultStyle, ...style }} {...allProps}>
      {children}
    </View>
  );
};

export const BusyIndicator = () => {
  return (
    <Modal transparent={true}>
      <BusyContainer>
        <ActivityIndicator size='large' />
      </BusyContainer>
    </Modal>
  );
};
