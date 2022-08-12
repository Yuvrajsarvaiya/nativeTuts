import React, {useState} from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {Switch} from 'react-native-gesture-handler';
import Animated, {
  Easing,
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const SWITCH_TRACK_COLOR = {
  true: 'pink',
  false: 'gray',
};

const COLORS = {
  light: {
    backgroundColor: '#fefefe',
    circle: '',
  },
  dark: {
    backgroundColor: '#333333',
    circle: '',
  },
};

export function Animation4() {
  const [theme, setTheme] = useState('light');

  const progressValue = useDerivedValue(() => {
    return theme === 'dark' ? withTiming(1) : withTiming(0);
  }, [theme]);

  const reanimatedStyle = useAnimatedStyle(() => {
    let backgroundColor = interpolateColor(
      progressValue.value,
      [0, 1],
      [COLORS.light.backgroundColor, COLORS.dark.backgroundColor],
    );
    return {
      backgroundColor,
    };
  });

  function handleToggle(toggled) {
    setTheme(toggled ? 'dark' : 'light');
  }

  return (
    <Animated.View style={[styles.container, reanimatedStyle]}>
      <Animated.View style={styles.circle}>
        <Switch
          value={theme === 'dark'}
          onValueChange={(toggled) => {
            handleToggle(toggled);
          }}
          trackColor={SWITCH_TRACK_COLOR}
          thumbColor="violet"
        />
      </Animated.View>
    </Animated.View>
  );
}

const SIZE = Dimensions.get('window').width * 0.7;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: SIZE,
    height: SIZE,
    borderRadius: 1000,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#434343',
  },
});
