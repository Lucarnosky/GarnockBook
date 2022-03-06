import * as React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View, StyleSheet,Image } from "react-native";
import { HomeScreen } from "../../Screens/HomeScreen";
import IconFA from 'react-native-vector-icons/FontAwesome';

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
     <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
    </View>
  );
}

const Tab = createBottomTabNavigator();

export class Footer extends React.Component {
    render() {
        return (
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        
                        switch (route.name) {
                            case 'Home':
                                iconName = 'home';
                                break;
                            case 'Settings':
                                iconName = 'cog';
                                break;
                            default:
                                iconName = "question";
                                break;
                        }
                        // You can return any component that you like here!
                        return <IconFA
                            name={iconName}
                            size={size}
                            color={color}
                            borderWidth="1"
                            borderColor="black"
                            borderRadius="50"
                        />;
                    },
                    showLabel: false,
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                    headerShown: false,
                })}
            >
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
                <Tab.Screen name="Logout" component={SettingsScreen} />
            </Tab.Navigator>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    tinyLogo: {
      width: 50,
      height: 50,
    },
    logo: {
      width: 66,
      height: 58,
    },
  });
  