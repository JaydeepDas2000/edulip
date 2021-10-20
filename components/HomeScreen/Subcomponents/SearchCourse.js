import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import {
    Card,
    Text,
    Searchbar
} from 'react-native-paper';

export default function SearchCourse() {
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);
    return(
        <Searchbar
            placeholder="Search Course"
            onChangeText={onChangeSearch}
            value={searchQuery}
            style = {{fontSize: 18, marginVertical: 10, marginBottom: 20}}
        />
    )
}