import React from "react";
import { View, Text, Button, StyleSheet, Alert } from "react-native";

export default function SettingsScreen() {
  const confirmReset = () => {
    Alert.alert("Warning", "Resetting may reduce app productivity.", [
      { text: "Cancel", style: "cancel" },
      { text: "Proceed", onPress: () => console.log("Settings reset") }
    ]);
  };

  const confirmDelete = () => {
    Alert.alert("Delete Profile", "This action is irreversible.", [
      { text: "Cancel", style: "cancel" },
      { text: "Delete", onPress: () => console.log("Profile deleted") }
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Button title="Reset Settings" onPress={confirmReset} />
      <Button title="Delete Profile" onPress={confirmDelete} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 }
});
