import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SimpleLineIcons, AntDesign } from "@expo/vector-icons";
import { NewsContext } from "../API/context";

const TopNavigation = ({ index, setIndex }) => {
  const { fetchNews } = useContext(NewsContext);
  return (
    <View style={{ ...styles.container, backgroundColor: "#282c35" }}>
      {index === 0 ? (
        <TouchableOpacity>
          <Text style={{ ...styles.text, color: "lightgrey" }}>
            <MaterialCommunityIcons
              name="theme-light-dark"
              size={24}
              color="#007FFF"
            />
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.left}
          onPress={() => setIndex(index === 0 ? 1 : 0)}
        >
          <SimpleLineIcons name="arrow-left" size={24} color="#007FFF" />
          <Text style={{ ...styles.text, color: "lightgrey" }}></Text>
        </TouchableOpacity>
      )}
      <Text style={{ ...styles.center, color: "white" }}>
        {index ? "All News" : "Discover"}
      </Text>
      {index ? (
        <TouchableOpacity style={styles.right} onPress={() => fetchNews}>
          <Text style={styles.text}>
            <AntDesign name="reload1" size={24} color="#007FFF" />
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.left}
          onPress={() => setIndex(index === 0 ? 1 : 0)}
        >
          <Text style={{ ...styles.text, color: "white" }}>All News</Text>
          <SimpleLineIcons name="arrow-right" size={15} color="#007FFF" />
        </TouchableOpacity>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    alignItems: "center",
    borderBottomColor: "black",
    borderBottomWidth: 0.5,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "center",
    width: 80,
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
  },
  right: {
    width: 80,
    alignItems: "flex-end",
  },
  center: {
    paddingBottom: 6,
    borderBottomColor: "#007FFF",
    borderBottomWidth: 5,
    borderRadius: 10,
    fontSize: 16,

    // // alignItems: "center",
    // justifyContent: "center",
    // alignSelf: "center",
    // textAlign: "center",
    fontWeight: "700",
  },
});

export default TopNavigation;
