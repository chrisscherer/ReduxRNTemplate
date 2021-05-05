import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/home.screen.js';
import ScanScreen from "./src/screens/scan.screen";

const Stack = createStackNavigator();

const App = () => (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{title: "Home"}}
            />
            <Stack.Screen name="Scan" component={ScanScreen} options={{title: "Scan"}} />
        </Stack.Navigator>
    </NavigationContainer>
);
export default App;
