import React, {useMemo, useCallback} from 'react';
import {PanGestureHandler} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

import Context from './Context';

export default function Form({...props}) {
  const translateY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {},
  });

  const onGestureEvent = useAnimatedGestureHandler({
    onStart: (event) => {},
    onActive: (event) => {},
    onEnd: (event) => {},
  });

  const style = useAnimatedStyle(() => {
    return {
      transform: [{translateY: translateY.value}],
    };
  });

  const onLayout = useCallback(() => {}, []);

  const contextValue = useMemo(
    () => ({onLayout, scrollHandler}),
    [onLayout, scrollHandler],
  );

  return (
    <Context.Provider value={contextValue}>
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View {...props} style={style} />
      </PanGestureHandler>
    </Context.Provider>
  );
}
