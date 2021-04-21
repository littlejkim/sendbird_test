import React, {useEffect} from 'react';
import {AppState, View, Text} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import CustomStack from './src/screens/WelcomeScreen';
import SendBird from 'sendbird';

export const APP_ID = 'CCEEA1F1-30CF-4D6E-B0D3-3E98E3D95141';

export default function App() {
  useEffect(() => {
    RNBootSplash.hide();
    const listener = state => {
      switch (state) {
        case 'active':
          return RNBootSplash.hide({fade: false}).catch(error => {
            console.log('hide error', error);
          });
        case 'inactive':
          return RNBootSplash.show({fade: false}).catch(error => {
            console.log('show error', error);
          });
      }
    };

    RNBootSplash.hide({fade: true})
      .then(() => AppState.addEventListener('change', listener))
      .catch(error => console.error(error));
    return () => {
      AppState.removeEventListener('change', listener);
    };
  });
  return <CustomStack />;
}
