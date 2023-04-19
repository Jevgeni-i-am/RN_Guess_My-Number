import { StyleSheet, Text, View } from 'react-native';
import Colors from '../../constant/colors';
import { DeviceHeight, DeviceWidth } from '../../constant/dimensions';

export default function NumberContainer({ children }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{children}</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: Colors.accent500,
        padding: DeviceWidth < 380 ? 12 : 24,
        margin: DeviceWidth < 380 ? 12 : 24,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center"
    },

    text: {
        color: Colors.accent500,
        fontSize: DeviceWidth < 380 ? 28 : 36,
        textAlign: "center",


    },



});