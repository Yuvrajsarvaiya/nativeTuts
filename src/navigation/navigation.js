import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {
  DrawerActions,
  NavigationContainer,
  useNavigation,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Feather from 'react-native-vector-icons/Feather';

import Routes from './routes';
import {Products, EcomProduct, Account} from '../screens';
import {Animation2} from '../screens/animations';
import SignIn from '../screens/SignIn';
import {Filter} from '../screens/Filter';
import Jobs from '../screens/Jobs';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function DrawerHeader(props) {
  return (
    <View style={{paddingVertical: 20, paddingHorizontal: 15}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Feather
          name="menu"
          size={20}
          onPress={() => props.navigation.dispatch(DrawerActions.openDrawer())}
        />
      </View>
    </View>
  );
}

function Login({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity
        style={{
          backgroundColor: 'plum',
          paddingHorizontal: 20,
          paddingVertical: 14,
          borderRadius: 6,
        }}
        onPress={() => navigation.navigate('Sign In')}>
        <Text style={{fontSize: 17, color: 'black'}}>Log in</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: 'plum',
          paddingHorizontal: 20,
          paddingVertical: 14,
          borderRadius: 6,
          marginTop: 20,
        }}
        onPress={() => navigation.navigate('Account')}>
        <Text style={{fontSize: 17, color: 'black'}}>Account</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: 'plum',
          paddingHorizontal: 20,
          paddingVertical: 14,
          borderRadius: 6,
          marginTop: 20,
        }}
        onPress={() => navigation.navigate('Animation')}>
        <Text style={{fontSize: 17, color: 'black'}}>Animation</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: 'plum',
          paddingHorizontal: 20,
          paddingVertical: 14,
          borderRadius: 6,
          marginTop: 20,
        }}
        onPress={() => navigation.navigate('Filter')}>
        <Text style={{fontSize: 17, color: 'black'}}>Filter Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: 'plum',
          paddingHorizontal: 20,
          paddingVertical: 14,
          borderRadius: 6,
          marginTop: 20,
        }}
        onPress={() => navigation.navigate('Jobs')}>
        <Text style={{fontSize: 17, color: 'black'}}>Jobs Screen</Text>
      </TouchableOpacity>
    </View>
  );
}

function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{}}>
        <Stack.Screen
          name="LOGIN"
          component={Login}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen
          name="Profile"
          component={EcomProduct}
          options={{
            headerLeft: (props) => {
              const navigation = useNavigation();
              return (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Text
                    style={{
                      fontSize: 16,
                      color: 'gray',
                      fontFamily: 'Roboto-Medium',
                    }}>
                    Cancel
                  </Text>
                </TouchableOpacity>
              );
            },
            headerBackVisible: false,
            headerTitleAlign: 'center',
            headerTitle: () => {
              return (
                <View
                  style={{
                    backgroundColor: '#FFFFFF',
                    paddingVertical: 10,
                    paddingHorizontal: 10,
                    borderBottomWidth: StyleSheet.hairlineWidth,
                    borderColor: '#CCCCCC',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: '#000000',
                      fontWeight: '700',
                      fontSize: 14,
                      fontFamily: 'Inter-Bold',
                    }}>
                    Jordan 1 retro high ig
                  </Text>
                  <Text style={{fontSize: 13, color: 'gray'}}>Patent Bred</Text>
                </View>
              );
            },
          }}
        /> */}

        <Stack.Screen name="Sign In" component={SignIn} />

        <Stack.Screen
          name="Account"
          component={Account}
          options={{
            headerBackVisible: false,
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 17,
              fontWeight: 'bold',
              fontFamily: 'Inter-Bold',
            },
            headerShadowVisible: false,
            headerLeft: () => {
              return (
                <Feather name="help-circle" size={24} onPress={() => {}} />
              );
            },
          }}
        />

        <Stack.Screen name="Animation" component={Animation2} />
        <Stack.Screen
          name="Filter"
          component={Filter}
          headerShown={false}
          options={{
            headerBackVisible: false,
            headerTitleAlign: 'center',
            headerShadowVisible: false,
            headerTitleStyle: {
              fontSize: 17,
              fontWeight: 'bold',
              fontFamily: 'Inter-Bold',
              color: 'white',
            },
            headerStyle: {backgroundColor: '#0D0F0D'},
          }}
        />
        <Stack.Screen
          name="Jobs"
          component={Jobs}
          headerShown={false}
          options={{
            headerBackVisible: false,
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Welcome({navigation}) {
  return (
    <ScrollView contentContainerStyle={{flex: 1}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <Text
          style={{
            textTransform: 'uppercase',
            fontSize: 30,
            fontWeight: 'bold',
            color: '#203151',
          }}>
          Game On
        </Text>

        <Image
          source={require('../assets/images/battlefield-2042.webp')}
          style={{width: '70%', height: 300, borderRadius: 4}}
          resizeMode="contain"
        />

        <TouchableOpacity
          style={{
            backgroundColor: 'purple',
            paddingHorizontal: 20,
            paddingVertical: 10,
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 4,
          }}
          activeOpacity={0.85}
          onPress={() => {
            navigation.navigate('Drawer Navigator');
          }}>
          <Text style={{color: 'white', marginRight: 10}}>Let's Begin</Text>
          <Feather name="arrow-right" color="white" size={18} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerLabelStyle: {color: 'white', fontSize: 18},
        drawerStyle: {backgroundColor: 'blue'},
        header: (props) => <DrawerHeader {...props} />,
      }}>
      <Drawer.Screen name={Routes.PRODUCT_SCREEN} component={Products} />
    </Drawer.Navigator>
  );
}

export default RootNavigation;
