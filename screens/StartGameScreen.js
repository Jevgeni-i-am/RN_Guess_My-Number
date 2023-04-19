import { useState } from 'react';
import {
  StyleSheet, View,
  TextInput, Alert,
  useWindowDimensions,
  KeyboardAvoidingView, ScrollView
} from 'react-native';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Colors from '../constant/colors.js'


export default function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState('')

  const { width, height } = useWindowDimensions()



  function nuimberInputHandler(enteredText) {
    setEnteredNumber(enteredText)
  }

  function resetInputHandler() {
    setEnteredNumber('')
  }

  function confirmInpurHandler() {
    const choosenNumber = parseInt(enteredNumber)
    if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
      Alert.alert(
        'Invalid number!',
        'Number has to be a number between 1 and 99.',
        [{
          text: 'Okay!',
          style: 'destructive',
          onPress: resetInputHandler
        }]
      )

      return
    } onPickNumber(choosenNumber)

  }


  const marginTopDistance = height < 480 ? 30 : 100

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
          <Title>Guess my number!</Title>
          <Card>
            <InstructionText>Enter a number!</InstructionText>
            <TextInput
              style={styles.inputContainer}
              maxLength={2}
              keyboardType="number-pad"
              autoCapitalize='none'
              autoCorrect={false}
              value={enteredNumber}
              onChangeText={nuimberInputHandler}
            />

            <View style={styles.buttonsContainer}>

              <View style={styles.button}>
                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
              </View>
              <View style={styles.button}>
                <PrimaryButton onPress={confirmInpurHandler}>Confirm</PrimaryButton>
              </View>

            </View>

          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}





const styles = StyleSheet.create({
  screen: { flex: 1 },
  rootContainer: {
    flex: 1,
    //marginTop: DeviceHeight < 480 ? 30 : 100,
    alignItems: "center",
  },




  inputContainer: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",

  },

  buttonsContainer: {
    minWidth: 150,
    flexDirection: "row",
    padding: 6,
  },
  button: {
    flex: 1,
    minWidth: 100
  },

});


