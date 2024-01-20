import { StyleSheet, View } from 'react-native';
import Box from './components/Box';

export default function App() {
  return (
    // <View style={{ backgroundColor: "plum", flex: 1 }}>
    <View style={styles.container}>
      <Box style={ { backgroundColor: "#8e9b00", flex: 1 }}>Box 1</Box>
      <Box style={ { backgroundColor: "#b65d1f" }}>Box 2</Box>
      <Box style={ { backgroundColor: "#1c4c56" }}>Box 3</Box>
      <Box style={ { backgroundColor: "#6b0803", flex: 1 }}>Box 4</Box>
      <Box style={ { backgroundColor: "#8e9b00" }}>Box 5</Box>
      <Box style={ { backgroundColor: "#8f9b76" }}>Box 6</Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 64,
    borderWidth: 6,
    borderColor: "red",
    flex: 1,
  },
});
