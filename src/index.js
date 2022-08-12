import React from 'react';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';

import RootNavigation from './navigation/navigation';

function App() {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <RootNavigation />
    </SafeAreaProvider>
  );
}

export default App;
