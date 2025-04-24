import { Text, View } from 'react-native';
import appTheme from '../../theme';

export const ContentWrapper = (props) => {
  const { children, style, ...allProps } = props;
  const theme = appTheme;
  const defaultStyle = {
    flex: 1,
    paddingTop: 0,
    paddingLeft: theme.spacing.medium,
    paddingBottom: 0,
    paddingRight: theme.spacing.medium,
  };
  return (
    <View style={{ ...defaultStyle, ...style }} {...allProps}>
      {children}
    </View>
  );
};

export const SectionLabel = (props) => {
  const { children, style, ...allProps } = props;
  const theme = appTheme;
  const defaultStyle = {
    color: theme.colors.secondary,
    fontSize: theme.fontSizes.medium,
    fontSeight: 'bold',
  };
  return (
    <Text style={{ ...defaultStyle, ...style }} {...allProps}>
      {children}
    </Text>
  );
};

export const Label = (props) => {
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

export const Row = (props) => {
  const { children, style, ...allProps } = props;
  const theme = appTheme;
  const defaultStyle = {
    flex: 1,
    flexDirection: 'row',
    maxHeight: 64,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    border: `1px solid ${theme.colors.secondary}`,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  };
  return (
    <View style={{ ...defaultStyle, ...style }} {...allProps}>
      {children}
    </View>
  );
};

export const ColumnLeft = (props) => {
  const { children, style, ...allProps } = props;
  const defaultStyle = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  };
  return (
    <View style={{ ...defaultStyle, ...style }} {...allProps}>
      {children}
    </View>
  );
};

export const ColumnRight = (props) => {
  const { children, style, ...allProps } = props;
  const defaultStyle = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  };
  return (
    <View style={{ ...defaultStyle, ...style }} {...allProps}>
      {children}
    </View>
  );
};

export const ButtonWrapper = (props) => {
  const { children, style, ...allProps } = props;
  const theme = appTheme;

  const defaultStyle = {
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: theme.spacing.extralarge,
    paddingRight: theme.spacing.extralarge,
    marginBottom: theme.spacing.medium,
  };
  return (
    <View style={{ ...defaultStyle, ...style }} {...allProps}>
      {children}
    </View>
  );
};

export const Spacer = (props) => {
  const { children, style, ...allProps } = props;
  const theme = appTheme;

  const defaultStyle = {
    height: `${theme.spacing.medium}px`,
  };
  return (
    <View style={{ ...defaultStyle, ...style }} {...allProps}>
      {children}
    </View>
  );
};
