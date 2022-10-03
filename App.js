import React from 'react'
// import createStackNavigator from react-navigation/stack
import { createStackNavigator } from '@react-navigation/stack'
// import DefaultTheme and NavigationContainer from react-navigation/native 
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
// import SignUp from the screens 
import { SignUp } from './screens'
import Tabs from './navigation/Tabs'

// make a default theme variable and use spread operator 
const theme = {
  ...DefaultTheme,
  // colors is DefaultTheme.colors && border is transparent
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent',
  }
}

// make Stack varibale which is equal to the createStackNavigator function
const Stack =  createStackNavigator()

const App = () => {
  return (
    // wrap everything into the NavigationContainer and give it theme prop is equal to theme variable 
    <NavigationContainer theme={theme}>
      {/* Stack.Navigation to use Stack Navigation  */}
      <Stack.Navigator
        // screenOptions is headerShown=false
        screenOptions={{
         headerShown: false,
        }}
        // initialRouteName is SignUp
        initialRouteName={'SignUp'}
      >
        {/* Stack.screen name is SignUp and component is SignUp */}
        <Stack.Screen name='SignUp' component={SignUp} />
        
        {/* Tabs */}
        <Stack.Screen name='Tabs' component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App