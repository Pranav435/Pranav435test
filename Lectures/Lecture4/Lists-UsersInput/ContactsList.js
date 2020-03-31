import React from 'react'
import { SectionList, Text } from 'react-native'
import PropTypes from 'prop-types'

import Row from './Row'

// _renderItem = ({ item }) => <Row {...item} />
const renderItem = obj => <Row name={obj.item.name} phone={obj.item.phone} />
// or another way which eliminates the use of null
const renderSectionHeader = obj => <Text>{obj.section.title}</Text>


const ContactsList = props => {
    const contactsByLetter = props.contacts.reduce((obj, contact) => {
        const firstLetter = contact.name[0].toUpperCase()
        return {
            ...obj, // retain all the previous keys so clone it 
            [firstLetter]: [...(obj[firstLetter] || []), contact], // setting a new array from the previous obj keys and add that contact to the new array
        }
    }, {})

    const sections = Object.keys(contactsByLetter).sort().map(letter => ({
        title: letter,
        data: contactsByLetter[letter],
    }))
    return (
        <SectionList
            renderItem={renderItem}
            renderSectionHeader={renderSectionHeader}
            sections={sections}
        />
    )
}

ContactsList.propTypes = {
    contacts: PropTypes.array
}

export default ContactsList
