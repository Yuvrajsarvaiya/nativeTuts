import React, {useContext} from 'react';
import {ScrollView as GHScrollView} from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

import Context from './Context';

const AnimatedScrollView = Animated.createAnimatedComponent(GHScrollView);

export default function ScrollView(props) {
  const {onLayout, scrollHandler} = useContext(Context);

  return (
    <AnimatedScrollView
      bounces={false}
      onLayout={onLayout}
      onScroll={scrollHandler}
      scrollEventThrottle={16}
      {...props}
    />
  );
}
