import React from 'react';
import { Button, SectionList, StyleSheet, Text, View } from 'react-native';
import { Constants } from 'expo';

import contacts, { compareNames } from './contacts'
import Row from './Row'
import ContactsList from './ContactsList'
import AddContactForm from './AddContactForm'

export default class App extends React.Component {
  state = {
    showContacts: false,
    showForm: false,
    contacts: contacts,
  }

  toggleContacts = () => {
    this.setState(prevState => ({ showContacts: !prevState.showContacts }))
  }

  toggleForm = () => {
    this.setState(prevState => ({ showForm: !prevState.showForm }))
  }

  sort = () => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts].sort(compareNames)
    }))
  }

  render() {
    if (this.state.showForm) return <AddContactForm />
    return (
      <View style={styles.container}>
        <Button title="toggle contacts" onPress={this.toggleContacts} />
        <Button title="Add Contact" onPress={this.toggleForm} />
        {this.state.showContacts && <ContactsList contacts={this.state.contacts} />}
      </View>
    )
  }
}

// the ideal way

// render() {
//   return (
//     <View style={styles.container}>
//       <Button title="toggle contacts" onPress={this.toggleContacts} />
//       {this.state.showContacts ? (
//         <ScrollView>
//           {contacts.map(contact => <Row {...contact} />)}
//         </ScrollView>
//       ) : null // passing null to a react element -> returns nothing
//       }
//     </View>
//   )
// }


// not the ideal way

// render() { 
//   if (this.state.showContacts) {
//     return (
//       <View style={styles.container}>
//         <Button title="toggle contacts" onPress={this.toggleContacts} />
//         <ScrollView>
//           {contacts.map(contact => <Row {...contact} />)}
//         </ScrollView>
//       </View>
//     )
//   }
//   return (
//     <View style={styles.container}>
//       <Button title="toggle contacts" onPress={this.toggleContacts} />
//     </View>
//   );
// }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
});
