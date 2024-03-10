import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { MyBarChart } from "./app/charts";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working wara on your app!</Text>
      <StatusBar style="auto" />
      <MyBarChart />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});