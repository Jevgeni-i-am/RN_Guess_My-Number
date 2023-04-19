import { StyleSheet, Text, Platform } from 'react-native';


export default function Title({ children }) {
  return (
    <Text style={styles.title}>{children}</Text>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontSize: 25,
    textAlign: "center",
    // borderWidth: Platform.OS === "android" ? 2 : 0,
    borderWidth: Platform.select({ios:0 , android:2 }),
    borderColor: "white",
    padding: 12,
    maxWidth: "80%",
    width: 300
  },



});
