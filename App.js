import * as React from "react";
import { StyleSheet,StatusBar,View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {Footer} from './Components/Base/Footer';
import { SafeAreaView,SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return <SafeAreaProvider><SafeAreaView style={styles.container}><NavigationContainer><Footer /></NavigationContainer></SafeAreaView></SafeAreaProvider>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 25,
    fontWeight: '500',
  },
  img: {
    width:"150",
    height:"150",
  }
});

