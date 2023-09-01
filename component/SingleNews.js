import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ImageBackground,
  TouchableOpacity,
  Linking,
} from "react-native";
import React from "react";

const SingleNews = ({ item, index }) => {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  return (
    <View
      style={{
        height: windowHeight,
        width: windowWidth,
        backgroundColor: "black",
        transform: [{ scaleY: -1 }],
        flex: 1,
      }}
    >
      <Image
        source={{ uri: item.urlToImage }}
        style={{ height: "45%", resizeMode: "cover", width: windowWidth }}
      />
      <View
        style={{
          ...styles.description,
          backgroundColor: "#282c35",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            color: "white",
            fontweight: 600,
            lineHeight: 25,
          }}
        >
          {item.title}
        </Text>
        <Text
          style={{
            ...styles.content,
            fonttSize: 16,
            color: "#e0e0e0",
            paddingTop: 20,
          }}
        >
          {item.description}
        </Text>
        <View
          style={{ flexDirection: "row", paddingTop: 20, alignItems: "center" }}
        >
          <Text style={{ color: "white" }}>Short By</Text>
          <Text style={{ color: "white", paddingLeft: 10, fontSize: 16 }}>
            {item.author ?? "unknown"}
          </Text>
        </View>
        <ImageBackground
          blurRadius={30}
          style={[styles.footer, { width: windowWidth }]}
          source={{ uri: item.urlToImage }}
        >
          <TouchableOpacity onPress={() => Linking.openURL(item.url)}>
            <Text style={{ fontSize: 15, color: "white" }}>
              '{item?.content?.slice(0, 45)}...'
            </Text>
            <Text style={{ fontsize: 17, fontweight: "bold", color: "white" }}>
              Read More
            </Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontsize: 18,
    fontweight: 600,
    paddingBottom: 10,
    color: "white",
  },
  content: {
    fontSize: 18,
    paddingBottom: 10,
    color: "gray",
  },
  footer: {
    height: 80,
    position: "absolute",
    bottom: 0,
    backgroundColor: "#d7be69",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  description: {
    padding: 15,
    flex: 1,
  },
});

export default SingleNews;
