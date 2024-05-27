import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/homeScreen/HomeScreen';
import LoginScreen from './screens/loginScreen/LoginScreen';
import Register from './screens/registerScreen/RegisterScreen';
import ContexProvider from './contex/Contex';

// crear un stack de navegación

const Stack = createNativeStackNavigator();

function App(){
  return(
    <ContexProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='Register' component={Register} />
        </Stack.Navigator>
      </NavigationContainer>
    </ContexProvider>
  );
}

export default App;