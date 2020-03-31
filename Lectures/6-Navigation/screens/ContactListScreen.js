import React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

import SectionListContacts from '../SectionListContacts';

export default class ContactListScreen extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        headerLeft: <View />,
        headerTitle: 'Contacts',
        headerTitleStyle: {
            flex: 1,
            textAlign: 'center',
            alignSelf: 'center'
        },
        headerRight: (
            <Button
                title="Add"
                onPress={() => {
                    navigation.navigate('AddContact');
                }}
            />
            // headerRight: <View /> Only use it when you navigate to the second screen and beyond to center align witht the back-button
        ),
    });


    state = {
        showContacts: true,
    };

    toggleContacts = () => {
        this.setState(prevState => ({ showContacts: !prevState.showContacts }));
    };

    handleSelectContact = contact => {
        this.props.navigation.push('ContactDetails', contact);
    };

    showForm = () => {
        this.props.navigation.navigate('AddContact')
    }

    render() {
        return (
            <View style={styles.container}>
                {this.state.showContacts && (
                    <SectionListContacts
                        contacts={this.props.screenProps.contacts}
                        onSelectContact={(contact) => {
                            this.props.navigation.navigate('ContactDetails', {
                                phone: contact.number,
                                name: contact.name
                            })

                        }}
                    />
                )}
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
