import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import {
    Card,
    Text
} from 'react-native-paper';

export default function CardCourseList({course_click_handle}) {
    const handle_click = (obj) => {
        course_click_handle(obj)
    }
    return(
        <Card style={{marginVertical: 5}} onPress={() => handle_click({'id' : '123'})}>
            <Card.Content>
                <Text>Bachelor of Technology</Text>
            </Card.Content>
        </Card>
    )
}