import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();


import Menu from './pages/menu'
import Buscar from './pages/buscar'
import Register from './pages/register'

export default function Routes(){
    return (
        <NavigationContainer>
            <AppStack.Navigator>
                <AppStack.Screen name='Menu' component={Menu} />
                <AppStack.Screen name='Register' component={Register} />
                
                <AppStack.Screen name='Buscar' component={Buscar} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}