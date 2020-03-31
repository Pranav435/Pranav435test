// import Example from './examples/1-Stack';
// export default Example;

import React from 'react';
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Constants } from 'expo';
import contacts, { compareNames } from './contacts';
import { createStackNavigator, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation'
import AddContactScreen from './screens/AddContactScreen';
import ContactListScreen from './screens/ContactListScreen';
import ContactDetailsScreen from './screens/ContactDetailsScreen';
import LoginScreen from './screens/LoginScreen';
import SettingsScreen from './screens/SettingsScreen';
import Ionicons from "react-native-vector-icons/Ionicons";

const ContactsTab = createStackNavigator(
  {
    AddContact: AddContactScreen,
    ContactList: ContactListScreen,
    ContactDetails: ContactDetailsScreen,
  },
  {
    initialRouteName: 'ContactList'
  },
);

ContactsTab.navigationOptions = {
  showIcon: true, // for Android
  tabBarIcon: ({ focused, tintColor }) => (
    <Ionicons
      name={`md-contacts${focused ? "" : "-outline"}`}
      size={25}
      color={tintColor}
    />
  )
}

const MainNavigator = createBottomTabNavigator({
  Contacts: ContactsTab,
  Settings: SettingsScreen,
}, {
    tabBarOptions: {
      activeTintColor: '#a41034'
    }
  })

const AppNavigator = createSwitchNavigator(
  {
    Main: MainNavigator,
    Login: LoginScreen,
  }, {
    initialRouteName: 'Login',

  },
);

export default class App extends React.Component {
  state = {
    // showContacts: true,
    contacts: contacts,
  };

  addContact = newContact => {
    this.setState(prevState => ({
      showForm: false,
      contacts: [...prevState.contacts, newContact],
    }));
  };

  render() {
    return (
      <AppNavigator
        screenProps={{
          contacts: this.state.contacts,
          addContact: this.addContact
        }}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
});
