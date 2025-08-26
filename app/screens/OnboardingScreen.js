import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function OnboardingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Navya App</Text>
      <Text style={styles.subtitle}>
        Modern minimal onboarding screen.
      </Text>
      <Button title="View Terms" onPress={() => navigation.navigate("Terms")} />
      <Button title="View Privacy" onPress={() => navigation.navigate("Privacy")} />
      <Button title="Continue" onPress={() => navigation.navigate("Settings")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 10 },
  subtitle: { fontSize: 16, color: "#666", textAlign: "center", marginBottom: 20 }
});
