import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  ScrollView,
} from "react-native";
import React, { useContext } from "react";
import { categories, sources } from "../API/api";
import { NewsContext } from "../API/context";
import Carousel from "react-native-snap-carousel";

const DiscoverScreen = () => {
  const { setCategory, setSource } = useContext(NewsContext);

  return (
    <View style={styles.discover}>
      <Text
        style={{
          color: "white",
          fontSize: 18,
          fontWeight: 600,
          marginBottom: 10,
        }}
      >
        Categories
      </Text>

      <View
        style={{
          flexDirection: "row",
          columnGap: 20,
          flexWrap: "wrap",
          // justifyContent: "center",
          paddingHorizontal: 20,
        }}
      >
        {categories.map((item, index) => (
          <TouchableOpacity
            style={styles.category}
            onPress={() => setCategory(item.name)}
            key={index}
          >
            <Image source={{ uri: item.pic }} style={styles.categoryImage} />
            <Text style={{ ...styles.name, color: "white" }}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={{ color: "white", fontSize: 18, fontWeight: 600 }}>
        Source
      </Text>
      <View style={styles.source}>
        {sources.map((s) => (
          <TouchableOpacity
            onPress={() => setSource(s.id)}
            key={s.id}
            style={styles.sourceContainer}
          >
            <Image source={{ uri: s?.pic }} style={styles.sourceImage} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  discover: {
    padding: 10,
    alignItems: "center",
    backgroundColor: "#1c2130",
    flex: 1,
  },

  categoryImage: {
    height: "60%",
    width: "100%",
    resizeMode: "contain",
  },
  name: {
    fontSize: 14,
    textTransform: "capitalize",
  },
  category: {
    height: 130,
    margin: 5,
    alignItems: "center",
  },
  sourceImage: {
    height: "100%",
    borderRadius: 10,
    resizeMode: "cover",
  },
  source: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingVertical: 15,
  },
  sourceContainer: {
    height: 150,
    width: "40%",
    borderRadius: 10,
    margin: 10,
    backgroundColor: "#cc313d",
  },
});

export default DiscoverScreen;
