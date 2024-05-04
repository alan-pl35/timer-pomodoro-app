import { StatusBar } from "expo-status-bar";
import {useState , useEffect} from 'react'
import { SafeAreaView, StyleSheet, Text, View, Platform , TouchableOpacity } from "react-native";
import Header from "./Components/Header";
import Timer from "./Components/Timer";

export default function App() {
  const colors = ['#F7DC6F' , '#A2D9CE' , '#D7BDE2']
  const [isWorking , setIsWorking] = useState(false);
  const [time , setTime] = useState(25*60);
  const [currentTime , setCurrentTime] = useState('POMODORO' | 'SHORT' | 'BREAK')
  const [isActive , setIsActive] = useState(false);
  return (
    <SafeAreaView style={[styles.container , {backgroundColor: colors[currentTime]}]}>
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
        <Header currentTime={currentTime} setCurrentTime={setCurrentTime}setTime={setTime} isActive={isActive} setIsActive={setIsActive} />
        <Timer time={time}/>
        <TouchableOpacity  style={styles.button} >
          <Text style={{color: 'white' , fontWeight: 'bold'}}>{isActive ? "STOP" : "START"}</Text>
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
