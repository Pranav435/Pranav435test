
import React from 'react'
import { View } from 'react-native'
import AddContactForm from '../AddContactForm'


export default class AddContactScreen extends React.Component {

    static navigationOptions = {
        headerTitle: 'Add Contact',
        headerTitleStyle: {
            flex: 1,
            textAlign: 'center',
            alignSelf: 'center'
        },
        headerRight: <View />
    }

    handleSubmit = formState => {
        this.props.screenProps.addContact(formState)
        this.props.navigation.navigate('ContactList')
    }

    render() {
        return <AddContactForm onSubmit={this.handleSubmit} />;
    }
}