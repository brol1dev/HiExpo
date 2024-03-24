import { useTheme } from "@react-navigation/native";
import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Page() {
  const theme = useTheme();

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
      }}
    >
      <Text>Home page</Text>

      <Link href="/graph" asChild>
        <Pressable>
          <Text>Go to Graph screen</Text>
        </Pressable>
      </Link>
    </View>
  );
}
