import React from "react";
import { ScrollView, Text, Button } from "react-native";

export default function PrivacyScreen({ navigation }) {
  return (
    <ScrollView style={{ padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: "bold" }}>Privacy Policy</Text>
      <Text style={{ marginVertical: 10 }}>
        This Privacy Policy explains how Navya App collects and uses your data.
        (Replace with hosted privacy text or fetch dynamically).
      </Text>
      <Button title="Back" onPress={() => navigation.goBack()} />
    </ScrollView>
  );
}
