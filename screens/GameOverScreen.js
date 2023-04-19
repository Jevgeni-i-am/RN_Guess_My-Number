import { Image, StyleSheet, Text, View, useWindowDimensions, ScrollView } from 'react-native';
import Title from '../components/ui/Title';
import Colors from '../constant/colors'
import PrimaryButton from "../components/ui/PrimaryButton"
import { DeviceHeight, DeviceWidth } from '../constant/dimensions';


export default function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
  const { width, height } = useWindowDimensions()

  let content = (
    <>

    </>
  )

  let imageSize = 300
  if (width < 380) {
    imageSize = 150
  }
  if (height < 400) {
    imageSize = 80
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2
  }



  return (
    <ScrollView style={styles.screen}>
      <View style={styles.rootContainer}>
        <Title>GAME OVER! </Title>
        <View style={[styles.imageContainer, imageStyle]}>
          <Image
            style={styles.image}
            source={require('../assets/images/success.png')}
          />
        </View>

        <View>
          <Text style={styles.summaryText}>
            Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the number
            <Text style={styles.highlight}>{userNumber}</Text>
          </Text>
        </View>
        <PrimaryButton onPress={onStartNewGame}>Start new game!</PrimaryButton>
      </View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  screen:{flex:1},
  rootContainer: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",

  },
  imageContainer: {
    // width: DeviceWidth < 380 ? 150 : 300,
    // height: DeviceWidth < 380 ? 150 : 300,
    // borderRadius: DeviceWidth < 380 ? 75 : 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,

  },
  image: {
    width: "100%",
    height: "100%"
  },
  summaryText: {
    fontStyle: "italic",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24
  },
  highlight: {
    fontWeight: "bold",
    fontSize: 28,
    color: Colors.primary500
  },

});
