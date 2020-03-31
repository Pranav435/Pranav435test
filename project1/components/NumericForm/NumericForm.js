import React from "react";
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, TouchableHighlight, TextInput } from "react-native";


const NumericForm = (props) => {
    const { onPress, buttonText, editable = true } = props

    const containerStyles = [styles.container];
    const underlayColor = '#C5C6B6'
    if (editable === false) {
        containerStyles.push(styles.containerDisabled)
    }

    return (
        <View style={styles.container}>
            <TouchableHighlight
                underlayColor={underlayColor}
                style={styles.buttonContainer}
                onPress={onPress}>
                <Text style={styles.buttonText}>{buttonText}</Text>
            </TouchableHighlight>
            <View style={styles.border} />
            <TextInput style={styles.input} underlineColorAndroid='transparent' {...props} />
        </View>
    )


}

NumericForm.propTypes = {
    onPress: PropTypes.func,
    buttonText: PropTypes.string,
    editable: PropTypes.bool,
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFF3',
        width: '90%',
        height: 48,
        borderRadius: 4,
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 11

    },
    buttonContainer: {
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFF3',
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4


    },
    containerDisabled: {
        backgroundColor: '#f8ecc9'
    },
    buttonText: {
        fontWeight: '600',
        fontSize: 20,
        paddingHorizontal: 16,
    },

    border: {
        height: 48,
        width: StyleSheet.hairlineWidth,
        backgroundColor: '#f8ecc9'
    },
    input: {
        height: 48,
        flex: 1,
        fontSize: 18,
        paddingHorizontal: 18,
        color: '#7C7877',
        width: 100,
        height: 40
        // alignSelf: 'flex-end'
    }
})

export default NumericForm