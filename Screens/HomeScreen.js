import * as React from "react";
import { Text, View, StyleSheet, FlatList, Image } from "react-native";
import IconFA from "react-native-vector-icons/FontAwesome";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

const Item = ({ post }) => (
  <View style={styles.post}>
    <View style={styles.item}>
      <Image
        style={styles.img}
        source={{
          uri: post.postImage,
        }}
      />
    </View>
    <View style={styles.postContent}>
      <Text>
        {post.first_name} {post.last_name}
      </Text>
      <Text>{post.insertedOn} </Text>
      <Text>{post.postContent}</Text>
      <View style={styles.postFooter}>
        <IconFA
          name="heart"
          size={16}
          color="black"
          borderWidth="1"
          borderColor="black"
        />
        <Text style={styles.likes}>{post.likesQty}</Text>
        <IconFA
          name="wechat"
          size={16}
          color="black"
          borderWidth="1"
          borderColor="black"
        />
        <Text style={styles.likes}>{post.likesQty}</Text>
      </View>
    </View>
  </View>
);
const addPost = () => {
    alert("Press!");
};
export class HomeScreen extends React.Component {
    
  render() {
    const postData = require("../POSTDATA.json");
    const renderItem = ({ item }) => <Item post={item} />;
    return (
      <View>
        <View style={styles.fixedHeader}>
          <Text>Timeline</Text>
          <Pressable><IconFA name="plus" size={16} color="black" onPress={addPost}/></Pressable>
        </View>
        <FlatList
          data={postData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
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
    flex: 2,
    width: null,
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
