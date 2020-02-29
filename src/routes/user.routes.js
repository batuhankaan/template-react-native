import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import User from '~/pages/User';
import Message from '~/pages/User/Message';
import Setting from '~/pages/User/Setting';

const Tab = createBottomTabNavigator();

export default function UserRoutes() {
  return (
    <Tab.Navigator initialRouteName="Profile">
      <Tab.Screen name="Profile" component={User} />
      <Tab.Screen name="Messages" component={Message} />
      <Tab.Screen name="Settings" component={Setting} />
    </Tab.Navigator>
  );
}
