// A picker/selector component implemented with React-Native Core components

import React, { ReactElement, useEffect, useState } from 'react';
import { FlatList, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import appTheme from '../theme';

const PICKER_ITEM_HEIGHT = 50;
const PICKER_VISIBLE_ITEMS = 5;

type PickerItemProps = { label: string; value: string };

type PickerProps = {
  selectedValue: string;
  onValueChange: (value: string, index: number) => void;
  children: ReactElement[];
};

interface PickerIF {
  Item: ({ label, value }: PickerItemProps) => JSX.Element;
}

const Picker_Item = ({ label }: PickerItemProps) => {
  return <Text>{label}</Text>;
};

// ### Styles
const PickerLabel = (props: any) => {
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

const PickerModalOverlay = (props: any) => {
  const { children, style, ...allProps } = props;
  const theme = appTheme;
  const defaultStyle = {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.loadingOverlay,
  };
  return (
    <TouchableOpacity style={{ ...defaultStyle, ...style }} {...allProps}>
      {children}
    </TouchableOpacity>
  );
};

const PickerModalContentContainer = (props: any) => {
  const { children, style, ...allProps } = props;
  const theme = appTheme;
  const defaultStyle = {
    backgroundColor: theme.colors.primary,
    width: '80%',
    maxHeight: PICKER_VISIBLE_ITEMS * PICKER_ITEM_HEIGHT,
    borderRadius: theme.borderRadius.medium,
  };
  return (
    <Text style={{ ...defaultStyle, ...style }} {...allProps}>
      {children}
    </Text>
  );
};

const PickerItemOption = (props: any) => {
  const { children, style, ...allProps } = props;
  const theme = appTheme;
  const defaultStyle = {
    widht: '100%',
    height: PICKER_ITEM_HEIGHT,
    paddingVertical: 0,
    paddingHorizontal: theme.spacing.medium,
    justifyContent: 'center',
  };
  return (
    <TouchableOpacity style={{ ...defaultStyle, ...style }} {...allProps}>
      {children}
    </TouchableOpacity>
  );
};

const PickerItemOptionLabel = (props: any) => {
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

const PickerItemOptionSeparator = (props: any) => {
  const { children, style, ...allProps } = props;
  const theme = appTheme;
  const defaultStyle = {
    width: '100%',
    height: 1,
    backgroundColor: theme.colors.secondary,
  };
  return (
    <View style={{ ...defaultStyle, ...style }} {...allProps}>
      {children}
    </View>
  );
};

const Picker: React.FC<PickerProps> & PickerIF = ({ children, selectedValue, onValueChange }) => {
  const [selectedLabel, setSelectedLabel] = useState('');
  const [opened, setOpened] = useState(false);

  const childrenArray = React.Children.toArray(children) as ReactElement[];
  const numberOfChildren = childrenArray.length;

  const renderItems = ({ item, index }: { item: ReactElement; index: number }) => {
    const isEmptyItem = item.props.value === '';
    const handlePressItemOption = () => {
      if (!isEmptyItem) onValueChange(item.props.value, index);
      setOpened(false);
    };

    const pickerStyle = StyleSheet.create({ item: { fontWeight: isEmptyItem ? 'bold' : 'normal' } });

    return (
      <PickerItemOption onPress={handlePressItemOption}>
        <PickerItemOptionLabel style={pickerStyle.item}>{item.props.label}</PickerItemOptionLabel>
      </PickerItemOption>
    );
  };

  useEffect(() => {
    if (numberOfChildren > 0) {
      const selectedItem = childrenArray.filter((item) => {
        const pickerItemProps = item.props as PickerItemProps;
        return pickerItemProps.value === selectedValue;
      });
      setSelectedLabel(selectedItem.length === 1 ? selectedItem[0].props.label : '');
    }
  }, [selectedValue, numberOfChildren, childrenArray]);

  const renderItemSeparator = () => <PickerItemOptionSeparator />;

  return (
    <>
      <TouchableOpacity onPress={() => setOpened(true)}>
        <PickerLabel>{selectedLabel} &#9660;</PickerLabel>
      </TouchableOpacity>

      <Modal visible={opened} transparent onRequestClose={() => setOpened(false)}>
        <PickerModalOverlay onPress={() => setOpened(false)}>
          <PickerModalContentContainer>
            <FlatList
              style={styles.flatList}
              data={childrenArray}
              renderItem={renderItems}
              keyExtractor={(_, index: number) => `${index}`}
              ItemSeparatorComponent={renderItemSeparator}
            />
          </PickerModalContentContainer>
        </PickerModalOverlay>
      </Modal>
    </>
  );
};

Picker.Item = Picker_Item;

export { Picker };

const styles = StyleSheet.create({ flatList: { width: '100%' } });
