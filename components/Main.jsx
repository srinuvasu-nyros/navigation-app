import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, StyleSheet} from 'react-native';

// Import icons (make sure these icons exist in the assets folder)
import homeIcon from '../assets/home.png';
import aboutIcon from '../assets/about.png';
import personIcon from '../assets/person.png';

// Import Screens
import Home from './Home';
import Profile from './Profile';
import About from './About';

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let iconSource;
          if (route.name === 'Home') {
            iconSource = homeIcon;
          } else if (route.name === 'Profile') {
            iconSource = personIcon;
          } else if (route.name === 'About') {
            iconSource = aboutIcon;
          }

          // Return the icon with conditional styling based on focus
          return (
            <Image
              source={iconSource}
              style={[
                styles.icon,
                {
                  tintColor: focused ? '#ffffff' : '#b0b0b0',
                },
              ]}
            />
          );
        },
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: '#b0b0b0',
        headerShown: false, // Hides the header on top for a cleaner look
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="About" component={About} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#1a1a1a',
    borderTopWidth: 0,
    elevation: 5, // Adds shadow on Android for depth
    paddingBottom: 5,
    paddingTop: 5,
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default MainContainer;
