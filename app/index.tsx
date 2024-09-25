// app/index.tsx
import Wrapper from "@/components/Wrapper";
import { View, Text, StyleSheet } from "react-native";

export default function Index() {
  return (
    <Wrapper>
      <Text>Ludo</Text>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
