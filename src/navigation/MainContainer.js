import  React,{useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Home from '../screens/Home';
import Store from '../screens/Store';
import Offers from '../screens/Offers';
import Notifications from '../screens/Notifications';
import Cart from '../screens/Cart';
import Profile from '../screens/Profile';
import {navigationStyle} from './styles';

//Screen names
const homeName = 'Home';
const storeName = 'Store';
const offersName = 'Offer';
const notificationsName = 'Notifications';
const cartName = 'Cart';
const profileName = 'Profile';



const Tab = createBottomTabNavigator();

function MainContainer() {

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            size=30;
            let rn = route.name;

            if (rn === homeName) {
              iconName = 'home';
              return <AntDesign name={iconName} size={size} color={color} />;
            } else if (rn === storeName) {
              iconName = 'bag-outline';
              return <Ionicons name={iconName} size={size} color={color} />;
            } else if (rn === offersName) {
              iconName = 'local-offer';
              return (
                <MaterialIcons name={iconName} size={size} color={color} />
              );
            } else if (rn === cartName) {
              iconName = 'shoppingcart';
              return <AntDesign name={iconName} size={size} color={color} />;
            } else if (rn === notificationsName) {
              iconName = 'notifications-outline';
              return <Ionicons name={iconName} size={size} color={color} />;
            } else if (rn === profileName) {
              iconName = 'menu-open';
              return (
                <MaterialIcons name={iconName} size={size} color={color} />
              );
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'grey',
          labelStyle: { display: 'none' }, 
          style: {
            backgroundColor: '#774a96', 
            height: 70, 
            borderTopWidth: 0, 
          },
        }}>
            <Tab.Screen
          name={homeName}
          component={Home}
          options={{
            headerTitle: '',
            headerStyle: {
              backgroundColor: '#774a96',
              height: 70,
            },
            headerRight: () => (
              <View style={navigationStyle.iconContainer}>
                <AntDesign
                  name="filter"
                  size={20}
                  color="#744a96"
                  style={navigationStyle.icon}
                  onPress={() => {
                    console.log('Filters icon pressed');
                  }}
                />

                <Ionicons
                  name="search"
                  size={20}
                  color="#774a96" 
                  style={navigationStyle.icon}
                  onPress={() => {
            
                    console.log('Search icon pressed');
                  }}
                />
              </View>
            ),
            headerLeft: () => (
              <MaterialCommunityIcons
                name="alpha-j"
                size={30}
                color="#fff" // Set the color for the icon
                style={navigationStyle.ProfileIcon}
                onPress={() => {
                  // Add functionality for the header icon
                  console.log('Filters icon pressed');
                }}
              />
            ),
          }}
        />
        <Tab.Screen name={storeName} component={Store} />
        <Tab.Screen name={offersName} component={Offers} />
        <Tab.Screen name={notificationsName} component={Notifications} />
        <Tab.Screen name={cartName} component={Cart} />
        <Tab.Screen name={profileName} component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;

