import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from 'react-redux';
import AuthNavigator from './AuthNavigator';
import TabNavigator from './Tab/TabNavigator';

const MainNavigator = () => {
  // const userId = 1
  const userId = useSelector(state => state.auth.userId);

  return (
    <NavigationContainer>
      {userId
        ? <TabNavigator />
        : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default MainNavigator;