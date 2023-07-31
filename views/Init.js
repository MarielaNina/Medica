import { StatusBar, ActivityIndicator, Image } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Home from './Home'
import Cita from './Cita'
import Historial from './Historial'
import Perfil from './Perfil'
import Icon from 'react-native-vector-icons/FontAwesome'
import Articulos from './Articulos'
import { useFonts, Inter_500Medium } from '@expo-google-fonts/inter'
const Tab = createBottomTabNavigator()

const iconSize = 28

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="white"
        translucent={false}
      />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarLabelStyle: { fontSize: 14, marginBottom: 20 },
            tabBarActiveTintColor: 'blue',
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: {
              height: 100,
              justifyContent: 'center',
              paddingVertical: 30,
            },
          }}
        >
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="home" size={iconSize} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Cita"
            component={Cita}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="calendar" size={iconSize} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Historial"
            component={Historial}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="history" size={iconSize} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Articulos"
            component={Articulos}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="book" size={iconSize} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Perfil"
            component={Perfil}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="user" size={iconSize} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  )
}
