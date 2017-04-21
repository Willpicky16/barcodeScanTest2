import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';

import Home from '../components/Home';
import Barcode from '../components/Barcode';
import Calendar from '../components/Calendar';
import Maps from '../components/Maps';
import Recycable from '../components/Recycable';

export const BarcodeStack = StackNavigator({
  Barcode: {
    screen: Barcode,
  },
  Recycable: {
    screen: Recycable,
    path: 'recyable/:code'
  }
})

export const Tabs = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home'
    }
  },
  Barcode: {
    screen: BarcodeStack,
    navigationOptions: {
      tabBarLabel: 'Barcode'
    }
  },
  Calendar: {
    screen: Calendar,
    navigationOptions: {
      tabBarLabel: 'Cal'
    }
  },
  Maps: {
    screen: Maps,
    navigationOptions: {
      tabBarLabel: 'Maps'
    }
  }
})
