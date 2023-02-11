import * as React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { Header } from 'react-native-elements'


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
      displayText:"",
    }

  }
  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor='blue'
          centerComponent={{ text: "Monkey Chunky", style: { color: "white", fontSize: 20 } }}
        />

        <TextInput
          style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({ text: text })
          }}
          value={this.state.text}
        />

        <Text>
          {
            this.state.displayText
          }
        </Text>





      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  }, inputBox: {
    marginTop: 200,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
});
