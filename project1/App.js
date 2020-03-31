import React from "react";
import { Button, ScrollView, KeyboardAvoidingView, StyleSheet, Text, View, TouchableHighlight } from "react-native";
import { Constants } from "expo";
import Timer from "./Timer";
import NumericForm from "./components/NumericForm/NumericForm";

const WORKTIME = 'WRK'
const BREAKTIME = 'BRK'




export default class App extends React.Component {

  /* These two functions does nothing Will come back later to finish the Challenge components */
  // workTimer = () => {
  //   this.refs.customWorkTimer.startTimer()
  // }

  // breakTimer = () => {
  //   Pomodoro.resetTimer()
  // }



  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={styles.titleText}>-WORK TIME-</Text>
        {/* <Text style={styles.countdown}>25:00</Text> */}
        {/* <Timer style={styles.container} /> */}
        <View>
          <Timer />
        </View>
        <View>
          <NumericForm
            buttonText={WORKTIME}
            placeholder="MM:SS"
            onPress={() => this.workTimer}
            keyboardType='numeric'
            editable={true} />
          <NumericForm
            buttonText={BREAKTIME}
            placeholder="MM:SS"
            onPress={() => this.resetTimer}
            keyboardType='numeric'
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10
  },

  countdown: {
    color: '#fff',
    alignItems: 'center',
    fontSize: 44,
    fontWeight: 'bold',
    justifyContent: 'space-between'
    // margin: 20
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    // textTransform: "uppercase"
  }
});
