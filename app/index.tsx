import { Link } from "expo-router";
import { Text } from "react-native";

export default function Page() {
  return (
    <>
      <Text>Home page</Text>
      <Link href="/graph">Graph</Link>
    </>
  );
}
