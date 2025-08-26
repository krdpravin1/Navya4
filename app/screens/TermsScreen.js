import React from "react";
import { ScrollView, Text, Button } from "react-native";

export default function TermsScreen({ navigation }) {
  return (
    <ScrollView style={{ padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: "bold" }}>Terms of Use</Text>
      <Text style={{ marginVertical: 10 }}>
        These are the Terms of Use for Navya App. By using the app you agree to abide by them.
        (Replace with hosted terms text or fetch dynamically).
      </Text>
      <Button title="Back" onPress={() => navigation.goBack()} />
    </ScrollView>
  );
}
