import React from 'react';
import {View, StyleSheet} from 'react-native';

import FilterButton from './FilterButton';

function FilterGroup({
  filterOptions,
  column,
  horizontalSpacing,
  verticalSpacing,
  multiple,
  selectedOptions,
  setSelectedOptions,
}) {
  return (
    <View style={styles.container}>
      {selectedOptions.map((option, index) => {
        return (
          <FilterButton
            key={option.id}
            {...option}
            column={column}
            horizontalSpacing={horizontalSpacing}
            verticalSpacing={verticalSpacing}
            numOfRows={filterOptions?.length}
            index={index}
            filterOptions={filterOptions}
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
            multiple={multiple}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
});

export default FilterGroup;
