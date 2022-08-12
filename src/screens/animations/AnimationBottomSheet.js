import React from 'react';
import {View, StyleSheet} from 'react-native';

import {YABSScrollView, YABSForm} from '../../rn-bottom-sheet';

export const AnimationBottomSheet = () => {
  return (
    <View style={styles.container}>
      <YABSForm></YABSForm>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
