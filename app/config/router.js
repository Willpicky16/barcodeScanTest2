import React from 'react';
import { TabNavigator } from 'react-navigation';

import Home from '../components/Home';
import Barcode from '../components/Barcode';
import Calendar from '../components/Calendar';
import Maps from '../components/Maps';

export const Tabs = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home'
    }
  },
  Barcode: {
    screen: Barcode,
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
