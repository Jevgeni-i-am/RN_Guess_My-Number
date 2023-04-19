import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Alert, FlatList, useWindowDimensions, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

import NumberContainer from '../components/game/NumberContainer';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Colors from '../constant/colors';
import GuessLogItem from '../components/game/GuessLogItem';

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude)
  } else { return rndNum }
}

let minBoundary = 1
let maxBoundary = 100


export default function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber)
  const [currentGuess, setCurrentGuess] = useState(initialGuess)
  const [guessRounds, setGuessRounds] = useState([initialGuess])
  const { width, height } = useWindowDimensions()

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length)
    }
  }, [currentGuess, userNumber, onGameOver])

  useEffect(() => {
    minBoundary = 1, maxBoundary = 100
  }, [])

  function nextGuessNumber(direction) { //direction=> 'lower' , 'greater'
    if ((direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'greater' && currentGuess > userNumber)) {
      Alert.alert("Don't lie!", "You should respect an opponent! This is wrong!",
        [{ text: 'Sorry!', style: 'cancel' }])
      return
    }

    if (direction === 'lower') {
      maxBoundary = currentGuess
    } else {
      minBoundary = currentGuess + 1
    }
    const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess)
    setCurrentGuess(newRndNumber)
    setGuessRounds(prevGuessRounds => [newRndNumber, ...prevGuessRounds])
  }

  const guessRoundsListlength = guessRounds.length

  let content = (
    <>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>

        <InstructionText style={styles.instructionText}>
          Higher or lower?
        </InstructionText>

        <View style={styles.buttons}>
          <View style={styles.button}>
            <PrimaryButton
              onPress={nextGuessNumber.bind(this, 'lower')}>
              <Ionicons name="md-remove" size={24} color="white" />
            </PrimaryButton>
          </View>

          <View style={styles.button}>
            <PrimaryButton onPress={nextGuessNumber.bind(this, 'greater')}>
              <Ionicons name="md-add" size={24} color="white" />
            </PrimaryButton>
          </View>

        </View>
      </Card>
    </>
  )

  if (width > 500) {
    content = (
      <>
       
        <View style={styles.buttonsContainerWide}>
          <View style={styles.button}>
            <PrimaryButton
              onPress={nextGuessNumber.bind(this, 'lower')}>
              <Ionicons name="md-remove" size={24} color="white" />
            </PrimaryButton>
          </View>

          <NumberContainer>{currentGuess}</NumberContainer>

          <View style={styles.button}>
            <PrimaryButton onPress={nextGuessNumber.bind(this, 'greater')}>
              <Ionicons name="md-add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </>
    )
  }

  return (
   
      <View style={styles.container}>
        <Title>Opponent's Guess </Title>
        {content}
        <View style={styles.logRounds}>
          {/* {guessRounds.map(guessRound=>
        <Text key={guessRound}>{guessRound}</Text>
          )} */}

          <FlatList
            data={guessRounds}
            renderItem={(itemData) =>
              <GuessLogItem
                roundNumber={guessRoundsListlength - itemData.index}
                guess={itemData.item}

              />
            }
            keyExtractor={(item) => item}

          />

        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  screen:{flex:1},

  container: {
    flex: 1,
    padding: 24,
    alignItems: "center"
  },

  instructionText: {
    marginBottom: 12,

  },
  buttons: {
    flexDirection: "row"
  },
  button: {
    flex: 1
  },

  buttonsContainerWide: {
    flexDirection: "row",
    alignItems: "center"
  },

  logRounds: {
    flex: 1,
    padding: 16
  },

});
