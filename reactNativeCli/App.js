import 'react-native-gesture-handler'
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { LoginScreen, HomeScreen, RegistationScreen } from './src/screens'
import { decode, encode } from 'base-64'
if (global.btoa) {
  global.btoa = encode
}
if (global.atob) {
  global.atob = decode
}
