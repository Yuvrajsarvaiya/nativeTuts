import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

export const Animation3 = () => {
  const opacity = useSharedValue(0);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const scale = useSharedValue(0);

  const reanimatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [
      {translateX: translateX.value},
      {translateY: translateY.value},
      {scale: scale.value},
    ],
  }));

  const handleCartAnimate = () => {
    'worklet';
    withSequence(
      (opacity.value = 1),
      (translateX.value = withTiming(100, {
        easing: Easing.linear,
        duration: 300,
      })),
    );
    // opacity.value = 1;
    // translateX.value = withTiming(100, {easing: Easing.linear, duration: 300});
    // translateY.value = withTiming(-300, {
    //   easing: Easing.linear,
    //   duration: 300,
    // });
    // scale.value = 1;
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.9}
        style={styles.button}
        onPress={handleCartAnimate}>
        <Text style={styles.btnText}>Add To Cart</Text>
        <Animated.View style={[styles.animate, reanimatedStyle]}>
          <Text style={styles.cartText}>3</Text>
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'blue',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 4,
  },
  btnText: {
    color: 'white',
    fontSize: 16,
  },
  animate: {
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: 'plum',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});
