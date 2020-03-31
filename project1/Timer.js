import React, { Component } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { vibrate } from './utils'


const styles = StyleSheet.create({
    appContainer: {
        alignItems: 'center',
        justifyContent: 'center'

    },
    secs: {
        fontSize: 80,
        fontWeight: 'bold',
        paddingTop: 10
    },

    buttonContainer: {
        alignItems: 'center',
        margin: 30,
        paddingBottom: 50,
        justifyContent: 'center',
        flexDirection: 'row',
        marginVertical: -5

    },

    resetButton: {
        justifyContent: 'space-between',
        padding: 10,
        width: 100,
        height: 50
        // alignSelf: 'flex-end'
    },

    startButton: {
        // alignSelf: 'flex-end'
        justifyContent: 'space-between',
        padding: 10,
        width: 100,
        height: 50
    },


    buttonSwitchContainer: {
        alignItems: 'center',
        margin: 10,
        paddingBottom: 10,
        justifyContent: 'center',
        flexDirection: 'row'

    },

    _25Button: {
        justifyContent: 'space-between',
        padding: 10,
        width: 100,
        height: 50,
        // alignSelf: 'flex-end'
    },

    _5Button: {
        // alignSelf: 'flex-end'
        justifyContent: 'space-between',
        padding: 10,
        width: 100,
        height: 50,
    },

})

export default class Timer extends Component {

    constructor() {
        super()
        this.state = {
            time: {},
            seconds: 5,
            isRunning: false,
            buttonColor: 'green',
            btCommand: 'START',
            button25: '25-min',
            button5: '5-min'
        };

        this.timer = 0
        // this.startTimer = this.startTimer.bind(this)
        // this.countDown = this.countDown 
    }


    secondsToTime(secs) {

        let hours = Math.floor(secs / (60 * 60))
        let divisor_for_minutes = secs % (60 * 60)
        let minutes = Math.floor(divisor_for_minutes / 60)

        let divisor_for_seconds = divisor_for_minutes % 60
        let seconds = Math.ceil(divisor_for_seconds)

        let obj = {
            "h": hours,
            "m": minutes,
            "s": seconds
        };

        return obj
    }
    componentDidMount() {

        let timeLeftVar = this.secondsToTime(this.state.seconds);
        this.setState({ time: timeLeftVar });

        // this.interval = setInterval(this.dec, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    resetTimer_25 = () => {

        let { isRunning } = this.state
        let seconds = this.state.seconds - 1;


        if (!isRunning) {
            clearInterval(this.timer)
            this.timer = setInterval(this.countDown, 1000)
            this.setState({
                isRunning: true,
                seconds: 1500
            })
        }
        else {
            clearInterval(this.timer)
            this.setState({
                isRunning: false,
                seconds: 1500
            })

            // }

            if (seconds <= 0) {
                clearInterval(this.timer)
            }

        }
    }

    resetTimer_5 = () => {

        let { isRunning } = this.state
        let seconds = this.state.seconds - 1;


        if (!isRunning) {
            // clearInterval(this.timer)
            this.timer = setInterval(this.countDown, 1000)
            this.setState({
                isRunning: true,
                seconds: 300
            })
        }
        else {
            clearInterval(this.timer)
            this.setState({
                isRunning: false,
                seconds: 300
            })

        }

        if (seconds <= 0) {

            clearInterval(this.timer)
        }

    }



    resetTimer = () => {

        let { isRunning } = this.state
        let seconds = this.state.seconds - 1;


        if (!isRunning) {
            // clearInterval(this.timer)
            this.timer = setInterval(this.countDown, 1000)
            this.setState({
                isRunning: true,
                seconds: 10
            })
        }
        else {
            clearInterval(this.timer)
            this.setState({
                isRunning: false
                // seconds: 25
            })

        }

        if (seconds === 0) {

            clearInterval(this.timer)
        }

    }



    /* Functionality of Starting and Stopping the timer */

    startTimer = () => {

        let { isRunning } = this.state

        if (!isRunning) {
            this.timer = setInterval(this.countDown, 1000)
            // clearInterval(this.timer)
            this.setState({
                isRunning: true,
                buttonColor: 'green',
                btCommand: 'START'
            })
        }
        else {
            clearInterval(this.timer);
            this.setState({
                isRunning: false,
                buttonColor: 'red',
                btCommand: 'PAUSE'
            })
        }

    }

    countDown = () => {

        let seconds = this.state.seconds - 1;
        this.setState({
            seconds: seconds,
            time: this.secondsToTime(seconds)
        });

        // Check if we're at zero.
        if (seconds <= 0) {
            vibrate()
            clearInterval(this.timer);
        }

    }

    addLeadingZeros(value) {
        value = String(value);
        while (value.length < 2) {
            value = '0' + value;
        }
        return value;
    }

    render() {
        return (
            <View style={styles.appContainer} >
                <Text style={styles.secs}>{this.state.time.m}:{this.addLeadingZeros(this.state.time.s)}</Text>

                <View style={styles.buttonSwitchContainer}>
                    <View style={styles.startButton}>
                        <Button onPress={this.startTimer}
                            title={this.state.btCommand}
                            color={this.state.buttonColor}
                        >
                        </Button>
                    </View>
                    <View style={styles.resetButton}>
                        <Button
                            onPress={this.resetTimer}
                            title="RESET"
                        >
                        </Button>
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <View style={styles._25Button}>
                        <Button
                            onPress={this.resetTimer_25}
                            title={this.state.button25}
                            color='#F16B6F'
                        >
                        </Button>
                    </View>
                    <View style={styles._5Button}>
                        <Button onPress={this.resetTimer_5}
                            title={this.state.button5}
                            color='#f9c00c'>
                        </Button>
                    </View>
                </View>
            </View>
        )
    }
}