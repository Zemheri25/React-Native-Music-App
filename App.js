import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, TextInput, FlatList } from "react-native";
import mockJson from "./data.json";
import { MusicCard } from "./components/MusicCard";

export default function App() {
  const [data, setData] = useState(mockJson);

  const renderSongs = ({ item }) => {
    return <MusicCard musicCard={item} />;
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Ara..."
        style={styles.textInput}
        onChangeText={(e) => {
          if (e) {
            const newData = mockJson.filter(
              (item) =>
                item.artist
                  .toLocaleLowerCase()
                  .includes(e.toLocaleLowerCase()) ||
                item.title.toLocaleLowerCase().includes(e.toLocaleLowerCase())
            );
            setData(newData);
          } else {
            setData(mockJson);
          }
        }}
      />
      <FlatList data={data} renderItem={renderSongs} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    paddingLeft: 5,
    paddingRight: 5,
  },

  textInput: {
    backgroundColor: "#EBECF0",
    borderRadius: 7,
    marginTop: 10,
    height: 40,
    padding: 10,
    marginBottom: 10,
  },
});
