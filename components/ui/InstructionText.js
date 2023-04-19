import { StyleSheet, View, Text } from 'react-native';
import Colors from '../../constant/colors';



export default function InstructionText({ children, style }) {
  return (
    <View>
      <Text style={[styles.textInstruction, style]}>
        {children}
      </Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textInstruction: {
    color: Colors.accent500,
    fontSize: 24

  },
});
