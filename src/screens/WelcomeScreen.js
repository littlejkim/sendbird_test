import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

export default function CustomStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        headerMode="float"
        screenOptions={{
          headerTitle: '',
          headerBackTitleVisible: false,
          headerTransparent: true,
        }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function WelcomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/full_logo.png')}
        resizeMode="contain"
      />
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.5}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>HOME</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    height: 200,
    width: 200,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 35,
    borderRadius: 19,
    height: 58,
    width: '100%',
    backgroundColor: '#7042E2',
  },
  buttonText: {
    fontSize: 17,
    fontWeight: '500',
    color: 'white',
    fontFamily: 'DamascusBold',
  },
});
