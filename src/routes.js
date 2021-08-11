import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import DetailsCourse from './pages/detailsCourse';
import Feed from './pages/feed';
import Login from './pages/login';
import MyCourses from './pages/myCourses';
import PlayerCourse from './pages/playerCourse';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: '#fff',
        inactiveTintColor: '#004d9d',
        activeBackgroundColor: '#004d9d',
        inactiveBackgroundColor: '#fff',
        labelStyle: {fontSize: 12, fontWeight: 'bold', paddingBottom: 5},
      }}>
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          headerShown: false,
          tabBarLabel: 'Feed',
          tabBarIcon: ({color, focused}) => (
            <Icon name="home" color={color} size={focused ? 25 : 20} />
          ),
        }}
      />
      <Tab.Screen
        name="MyCourses"
        component={MyCourses}
        options={{
          headerShown: false,
          tabBarLabel: 'Meus cursos',
          tabBarIcon: ({color, focused}) => (
            <Icon name="play-circle" color={color} size={focused ? 25 : 20} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#004d9d',
            height: 60,
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTintColor: '#fff',
        }}>
        <Stack.Screen
          options={{headerShown: false}}
          name="FeedTabs"
          component={Tabs}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          name="DetailsCourse"
          headerStyle={{backgroundColor: 'red'}}
          component={DetailsCourse}
          options={({route}) => ({title: route.params.name})}
        />
        <Stack.Screen
          name="PlayerCourse"
          component={PlayerCourse}
          options={({route}) => ({title: route.params.name})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
