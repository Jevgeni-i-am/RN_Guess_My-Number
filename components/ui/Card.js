import { StyleSheet, View } from 'react-native';
import Colors from '../../constant/colors';
import { DeviceHeight, DeviceWidth } from '../../constant/dimensions';


export default function Card({ children }) {
  return (
    <View style={styles.card}>
      {children}
    </View>
  );
}


const styles = StyleSheet.create({

  card: {
    alignItems: "center",
    marginTop: DeviceWidth < 380 ? 18 : 36,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    /* shadow, ONLY ANDROID */
    elevation: 10,

    /*IOs only shadow*/
    shadowColor: "black",
    shadowOffset: { width: 2, height: 3 },
    shadowRadius: 6,
    shadowOpacity: 0.25
  },
});
