import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, Platform , TouchableOpacity } from "react-native";

export default function App() {
  return (
    <SafeAreaView>
      <View
        style={{
          borderWidth: 6,
          borderColor: "black",
          flex: 1,
          paddingHorizontal: 15,
          paddingTop: Platform.OS === "android" && 30,
        }}
      >
        <Text style={styles.texto}>Hi Mom</Text>
        <StatusBar style="auto" />
        <TouchableOpacity  style={styles.button} >
          <Text style={{color: 'white' , fontWeight: 'bold'}}>Press here</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  texto: { fontSize: 32, color: "crimson" },
  otroTexto: { fontSize: 32, color: "gray" },
  button: {
    backgroundColor: '#333333',
    marginTop: 15,
    borderRadius: 15,
    padding: 15,
    alignItems: 'center'
  }
});
