import { StyleSheet, Text, View, Pressable } from 'react-native';
import  Colors  from '../../constant/colors';



export default function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer}
        onPress={onPress}
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}


const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    /** Any style from inside of this container isn't shown outside. 
     * Example - onPress ripple effect react only to a button, not outside!
     * Ripple effect is clipped, will not be visible outside!*/
    overflow: "hidden",

  },
 

  buttonInnerContainer: {
    backgroundColor:Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    /*ONLY Android shadow*/
    elevation: 2,
    /*IOs only shadow*/
    shadowColor: "black",
    shadowOffset: { width: 2, height: 3 },
    shadowRadius: 6,
    shadowOpacity: 0.25
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    opacity:0.85
  },

  /*IOs effect only on onPress - ripple effect!*/
  pressed: {
    opacity: 0.75,

  }
});
