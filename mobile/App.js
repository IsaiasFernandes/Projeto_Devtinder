import React from 'react';
import { YellowBox } from 'react-native';
import Index from './src/index';

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket'
]);

export default function App() {
  return <Index />
};
