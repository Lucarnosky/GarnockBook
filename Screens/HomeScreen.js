import * as React from "react";
import { Text, View, StyleSheet, FlatList, Image } from "react-native";
import IconFA from "react-native-vector-icons/FontAwesome";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import Moment from 'moment';

const Item = ({ post }) => (
  <View style={styles.post}>
    <View style={styles.item}>
      <Image
        style={styles.img}
        source={{
          uri: post.image,
        }}
      />
    </View>
    <View style={styles.postContent}>
      <Text>
        {post.firstName ? post.firstName: "John"} {post.lastName ? post.lastName: "Doe"}
      </Text>
      <Text>{post.postedOn? Moment(post.postedOn).format('D MMM y H:m') : "never"} </Text>
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
);
const addPost = () => {
  alert("Press!");
};

export class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      page: 1,
    };
  }

  getPost = async () => {
    var apiUrl =
      "https://jsonplaceholder.typicode.com/photos?_limit=10&_page=" +this.state.page;
    var apiUrl = "https://garnockbook.herokuapp.com/timeline/2022-03-08 14:00:00/"+this.state.page;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((jsonResponse) => {
        this.setState({
          posts: this.state.posts.concat(jsonResponse.results),
        });
      });
  };

  componentDidMount() {
    this.getPost();
  }

  flipPage = () => {
    this.setState({page: this.state.page + 1, },this.getPost);
  };

  render() {
    //const postData = require("../POSTDATA.json");
    const renderItem = ({ item }) => <Item post={item} />;
    return (
      <View>
        <View style={styles.fixedHeader}>
          <Text>Timeline</Text>
          <Pressable>
            <IconFA name="plus" size={16} color="black" onPress={addPost} />
          </Pressable>
        </View>
        <FlatList
          data={this.state.posts}
          renderItem={renderItem}
          keyExtractor={(item) => item.postId}
          onEndReached={this.flipPage} 
          onEndReachedThreshold={0.5}
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
