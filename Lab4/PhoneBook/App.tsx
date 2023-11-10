import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useEffect, useState} from "react";
import * as Contacts from "expo-contacts";
import {Contact} from "expo-contacts";
import ContactRow from "./components/ContactRow";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 10
    }
});

const App = () => {
    const [contacts, setContacts] = useState([] as Contact[])

    useEffect(() => {
        Contacts.requestPermissionsAsync()
            .then(() => {
                Contacts.getContactsAsync({
                    fields: [Contacts.Fields.Name, Contacts.Fields.PhoneNumbers]
                })
                    .then((res) => {
                        setContacts(res.data);
                    })
            })
    }, []);

    return (
        <View style={styles.container}>

            <FlatList
                data={contacts}
                renderItem={({item}) => <ContactRow name={item?.name}
                                                    number={item.phoneNumbers ? item.phoneNumbers[0].number : "Error"}/>}
            />

        </View>
    );
}

export default App;