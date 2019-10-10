import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import GameStatus from './components/GameStatus';
import ButtonGroup from './components/ButtonGroup';
import PlayerCard from './components/PlayerCard';

const CHOICES = [
  {
    name: 'Rock',
    uri: require('./assets/stone.png'),
  },
  {
    name: 'Paper',
    uri: require('./assets/paper.png'),
  },
  {
    name: 'Scissors',
    uri: require('./assets/scissors.png'),
  }
];

const randomComputerChoice = () =>
  CHOICES[Math.floor(Math.random() * CHOICES.length)];

const getRoundOutcome = playerChoice => {
  const computerChoice = randomComputerChoice();
  let result;

  if (playerChoice === 'Rock') {
    result = computerChoice.name === 'Scissors' ? 'Victory!' : 'Defeat!';
  }
  if (playerChoice === 'Paper') {
    result = computerChoice.name === 'Rock' ? 'Victory!' : 'Defeat!';
  }
  if (playerChoice === 'Scissors') {
    result = computerChoice.name === 'Paper' ? 'Victory!' : 'Defeat!';
  }

  if (playerChoice === computerChoice.name) result = 'Tie game!';
  return [result, computerChoice];
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gamePrompt: 'Fire!',
      computerChoice: {},
      playerChoice: {}
    };
  }

  onPressButton = playerChoice => {
    const [result, computerChoice] = getRoundOutcome(playerChoice);
    const foundChoicePlayer = CHOICES.find(choice => choice.name === playerChoice);
    this.setState({
      playerChoice: foundChoicePlayer,
      computerChoice,
      gamePrompt: result,
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.gameStatusWrapper}>
          <GameStatus result={this.state.gamePrompt}/>
        </View>
        <View style={styles.gamePlayerWrapper}>
          <PlayerCard PlayerName="Player" choice={this.state.playerChoice} />
          <Text style={{ justifyContent: 'center', alignItems: 'center', fontSize: 20, }}>vs</Text>
          <PlayerCard PlayerName="Computer" choice={this.state.computerChoice} />
        </View>
        <View style={styles.buttonGroupWrapper}>
          <ButtonGroup onPressButton={this.onPressButton} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  gameStatusWrapper: {
    backgroundColor: '#fff',
    flex: 0.15,
    justifyContent: 'flex-end',
    alignItems: "center",
    paddingBottom: 10,
  },
  gamePlayerWrapper: {
    backgroundColor: '#fff',
    flex: 0.55,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-around",
    marginHorizontal: 10,
    borderColor: '#000',
    borderWidth: 1,
    marginVertical: 5,
    ...Platform.select({
      ios: {
          shadowColor: '#000',
          shadowOpacity: 0.5,
          shadowRadius: 10,
          shadowOffset: { width: 0, height: 2},
      },
      android: {
          elevation: 15,
      },
  }),
  },
  buttonGroupWrapper: {
    backgroundColor: '#fff',
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingBottom: 50,
  },
});
