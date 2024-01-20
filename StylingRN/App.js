import { View, Text, StyleSheet } from "react-native"

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.lightblueBg, styles.box]}>
        <Text>Lightblue Box</Text>
      </View>
      <View style={[styles.lightgreenBg, styles.box, styles.boxShadow, styles.androidShadow]}>
        <Text>Lightgreen Box</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: "plum", padding: 60 },
  box: {width: 250, height: 250, padding: 10, margin: 6},
  lightblueBg: {backgroundColor: "lightblue"},
  lightgreenBg: {backgroundColor: "lightgreen"},
  boxShadow: {
    shadowColor: "#333333",
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.9,
    shadowRadius: 4,
  },
  androidShadow: {
    elevation: 10,
  },

})