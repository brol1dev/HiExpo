import { drizzle } from "drizzle-orm/expo-sqlite";
import { openDatabaseSync } from "expo-sqlite/next";
import { useMigrations } from "drizzle-orm/expo-sqlite/migrator";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import migrations from "../drizzle/migrations";
import { MyBarChart } from "../components/charts";
import { Countries } from "../components/insert";
import { Link } from "expo-router";

const expoDb = openDatabaseSync("db.db");
const db = drizzle(expoDb);

export default function Page() {
  const { success, error } = useMigrations(db, migrations);
  if (error) {
    return (
      <View>
        <Text>Migration error: {error.message}</Text>
      </View>
    );
  }
  if (!success) {
    return (
      <View>
        <Text>Migration is in progress...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working wara on your app!</Text>
      <StatusBar style="auto" />
      <MyBarChart />
      <Countries />
      <Link href="/">Home</Link>
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
