import Animated from 'react-native-reanimated';
import {useSharedValue} from 'react-native-reanimated';

interface Vector<T = number> {
  x: T;
  y: T;
}

export const useVector = (
  x1 = 0,
  y1?: number,
): Vector<Animated.SharedValue<number>> => {
  const x = useSharedValue(x1);
  const y = useSharedValue(y1 ?? x1);
  return {x, y};
};
