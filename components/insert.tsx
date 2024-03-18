import { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { drizzle } from "drizzle-orm/expo-sqlite";
import { openDatabaseSync } from "expo-sqlite/next";
import { Country, InsertCountry, countries } from "../db/schema";

const expoDb = openDatabaseSync("db.db");
const db = drizzle(expoDb);

export const Countries = () => {
  const [countryName, setCountryName] = useState("");
  const [countryList, setCountrlyList] = useState<Country[]>([]);

  const query = async () => {
    const result = await db.select().from(countries).all();
    console.log(`[Countries] result: ${JSON.stringify(result)}`);
    setCountrlyList(result);
  };
  useEffect(() => {
    query();
  }, []);

  const insertCountry = (country: InsertCountry) => {
    return db.insert(countries).values(country).run();
  };

  const saveCountryName = ({ nativeEvent: { text } }) => {
    console.log(`[Countries] saveCountryName: ${text}`);
    insertCountry({ name: text });
    query();
  };

  return (
    <>
      <View>
        {countryList.map(({ id, name }) => {
          return (
            <Text style={styles.title} key={id}>
              {name}
            </Text>
          );
        })}
      </View>

      <TextInput
        style={styles.input}
        value={countryName}
        onChangeText={setCountryName}
        onSubmitEditing={saveCountryName}
      />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  title: {
    fontSize: 18,
  },
});
