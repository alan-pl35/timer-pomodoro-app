import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const options = ["Pomodoro", "Short Break", "Long Break"];

export default function Header({ currentTime, setCurrentTime, setTime , isActive}) {
  function handlePress(index) {
    //relacionar el boton indicado con su respectivo tiempo
    const newTime = index === 0 ? 25 : index === 1 ? 5 : 15;
    setCurrentTime(index);
    setTime(newTime * 60);
    console.log(`currentTime : ${ currentTime} ,, index:: ${index}`)
}

  return (
    <View style={{ flexDirection: "row" }}>
      {options.map((item, index) => (
        <TouchableOpacity
          disabled={isActive ? true : false}
          key={index}
          style={[
            styles.itemStyle,
            currentTime !== index && { borderColor: "transparent" },
          ]}
          onPress={() => handlePress(index)}
        >
          <Text style={{fontWeight: 'bold' ,color: '#333333'}}>{item} </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  itemStyle: {
    borderWidth: 3,
    padding: 5,
    width: "33%",
    alignItems: 'center',
    borderRadius: 10,
    borderColor: 'white',
    marginVertical: 20,
    
  }
});
