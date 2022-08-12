import React from 'react';
import {Dimensions, Pressable, Text, StyleSheet} from 'react-native';

const {width: WIDTH} = Dimensions.get('window');

function FilterButton({
  label,
  column,
  horizontalSpacing,
  verticalSpacing,
  numOfRows,
  isChecked,
  id: optionId,
  setSelectedOptions,
  multiple,
}) {
  let width = WIDTH / column - horizontalSpacing;
  const activeStyle = isChecked ? styles.activeBtn : {};
  const activeTextStyle = isChecked ? styles.activeBtnText : {};

  return (
    <Pressable
      onPress={() => {
        if (multiple) {
          setSelectedOptions((prevSelectedOptions) =>
            prevSelectedOptions.map((option) => {
              if (optionId === 'All') {
                return option.id === optionId
                  ? {...option, isChecked: true}
                  : {...option, isChecked: false};
              } else {
                return option.id === 'All'
                  ? {...option, isChecked: false}
                  : option.id === optionId
                  ? {...option, isChecked: !option.isChecked}
                  : {...option};
              }
            }),
          );
          return;
        }
        setSelectedOptions((prevSelectedOptions) =>
          prevSelectedOptions.map((option) => {
            return option.id === optionId
              ? {...option, isChecked: true}
              : {...option, isChecked: false};
          }),
        );
      }}
      style={[
        styles.container({width, numOfRows, column, verticalSpacing}),
        activeStyle,
      ]}>
      <Text style={[styles.text, activeTextStyle]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: ({width, numOfRows, column, verticalSpacing}) => ({
    borderWidth: 1,
    width,
    backgroundColor: '#151715',
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    marginBottom: numOfRows > column ? verticalSpacing : 0,
  }),
  activeBtn: {
    borderWidth: 1,
    borderColor: '#0D9B57',
  },
  activeBtnText: {
    color: '#0D9B57',
  },
  text: {
    color: 'white',
    fontSize: 15,
  },
});

export default FilterButton;
