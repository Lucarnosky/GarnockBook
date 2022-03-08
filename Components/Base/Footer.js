import * as React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import { HomeScreen } from "../../Screens/HomeScreen";
import IconFA from 'react-native-vector-icons/FontAwesome';

function SettingsScreen() {
  var post = [];
  return (
    <View>
      <View style={styles.fixedHeader}>
        <Text>Timeline</Text>
        <Pressable>
          <IconFA name="plus" size={16} color="black"  />
        </Pressable>
      </View>
      <View style={styles.post}>
        <View style={styles.item}>
          <Image
            style={styles.img}
            source={{
              uri: "https://via.placeholder.com/150",
            }}
          />
        </View>
        <View style={styles.postContent}>
          <Text>
            {post.firstName ? post.firstName : "John"} {post.lastName ? post.lastName : "Doe"}
          </Text>
          <Text>{post.insertedOn ? post.insertedOn : "unkown"} </Text>
          <Text>{post.content}</Text>
          <View style={styles.postFooter}>
            <IconFA
              name="heart"
              size={16}
              color="black"
              borderWidth="1"
              borderColor="black"
            />
            <Text style={styles.likes}>{post.likesQty > 0 ? post.likesQty : 0}</Text>
            <IconFA
              name="wechat"
              size={16}
              color="black"
              borderWidth="1"
              borderColor="black"
            />
            <Text style={styles.likes}>{post.likesQty > 0 ? post.likesQty : 0}</Text>
          </View>
        </View>
      </View>
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
  homeContainer: {
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#81A984",
    flexDirection: "column",
  },
  fixedHeader: {
    left: 0,
    right: 0,
    backgroundColor: "#81A984",
    height: 50,
    alignItems: "center",
  },
  img: {
    height: 300,
    width: 300,
    flex: 1,
  },
  post: {
    flex: 1,
    backgroundColor: "#c9d4ca",
    marginBottom: 10,
  },
  postContent: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "#c9d4ca",
  },
  postFooter: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#c9d4ca",
  },
  likes: {
    marginLeft: 2,
    marginRight: 10,
  },
});
