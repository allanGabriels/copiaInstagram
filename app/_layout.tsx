import { SafeAreaView } from "react-native-safe-area-context";
import Post from "./post";

export default function RootLayout() {
  return (
    <SafeAreaView>
      <Post/>
    </SafeAreaView>
  );
}
