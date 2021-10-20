import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
    Card,
    Text,
    Title,
    Paragraph,
    Button,
    Divider,
    List
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import { color } from 'react-native-reanimated';
import SearchCourse from './Subcomponents/SearchCourse';
import CardCourseList from './Subcomponents/CardCourseList';
import SchoolList from '../../screens/SchoolList';

export default function CardCourse({navigation, course_click_handle}) {
    return (
        <Card style={styles.welcomeCard}>
            <Card.Content>
                <Title style={{ color: '#333', fontWeight: '600' }}>Course Search</Title>
                <SearchCourse />
                <Divider style={{marginBottom: 10}} />
                <CardCourseList course_click_handle={course_click_handle}/>
                {/*<CardCourseList/>
                <CardCourseList/>
                <CardCourseList/>
                <CardCourseList/>
                <CardCourseList/>*/}
            </Card.Content>
        </Card>
    )
}

const styles = StyleSheet.create({
    welcomeCard: {
        backgroundColor: "#fff",
        borderRadius: 0,
        marginTop: 10
    }
})