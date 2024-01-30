import { View, StyleSheet, Text, Image, Dimensions } from "react-native";

export const MusicCard = ({ musicCard }) => {
  return (
    <View style={styles.musicMain}>
      <Image
        style={styles.iamage}
        source={{
          uri: musicCard.imageUrl,
        }}
      />
      <View style={styles.middleColumn}>
        <Text style={styles.title}>{musicCard.title}</Text>
        <View style={styles.singerAndYear}>
          <Text style={styles.singer}>{musicCard.artist}</Text>
          <Text style={styles.year}>{musicCard.year}</Text>
        </View>
      </View>
      {musicCard.isSoldOut && <Text style={styles.noStock}>Tükendi</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  musicMain: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    borderBottomWidth: 2,
    borderColor: "#F0EEF0",
    paddingTop: 15,
    paddingBottom: 15,
  },
  iamage: {
    width: Dimensions.get("window").width / 5,
    height: Dimensions.get("window").height / 10,
    borderRadius: 100,
  },
  title: {
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 10,
  },
  singerAndYear: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    width: Dimensions.get("window").width / 3,
  },
  singer: {
    fontSize: 13,
    fontWeight: "500",
  },
  year: {
    fontSize: 11,
    color: "#B7B5B7",
  },
  noStock: {
    color: "#DC6F7E",
    marginLeft: 20,
    marginTop: 30,
    borderWidth: 2,
    borderColor: "#DC6F7E",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 2,
    fontWeight: "500",
    borderRadius: 10,
  },
  middleColumn: {
    width: 190,
  },
});
