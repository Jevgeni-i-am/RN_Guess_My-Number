import { StyleSheet, Text, View } from 'react-native';
import Colors from '../../constant/colors';


export default function GuessLogItem({roundNumber, guess}) {
  return (
   
    
      <View style={styles.listItem}>
        <Text>#{roundNumber}</Text>
        <Text>Oppenent's Guess: {guess}</Text>
      </View>

    
  );
}

const styles = StyleSheet.create({
    listItem: {
    borderColor:Colors.primary800,
    borderWidth:1,
    borderRadius:40,
    padding:12,
    marginVertical:8,
    backgroundColor:Colors.accent500,
    flexDirection:"row",
    justifyContent: "space-between",
    width:"100%",
    //Android shadow
    elevation: 4,
    // IOs shadow
    shadowColor:"black",
    shadowOffset:{width:0, height:0},
    shadowOpacity:0.25,
    shadowRadius:3
  },


});
