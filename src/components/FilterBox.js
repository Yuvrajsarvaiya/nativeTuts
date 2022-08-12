import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import FilterGroup from './FilterGroup';

function FilterBox({
  title,
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
      <Text style={[styles.filterTitleStyle]}>{title}</Text>
      <FilterGroup
        filterOptions={filterOptions}
        column={column}
        horizontalSpacing={horizontalSpacing}
        verticalSpacing={verticalSpacing}
        multiple={multiple}
        selectedOptions={selectedOptions}
        setSelectedOptions={setSelectedOptions}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  filterTitleStyle: {
    color: 'white',
    fontSize: 22,
    marginBottom: 10,
  },
});

export default React.memo(FilterBox);
