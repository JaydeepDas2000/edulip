import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
    Card,
    Text,
    Title,
    Paragraph,
    Button
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import { color } from 'react-native-reanimated';

export default function WelcomeCard() {
    return (
        <Card style={styles.welcomeCard}>
            <Card.Content>
                <Title style={{ textAlign: 'center', color: '#fff' }}>Welcome User</Title>
                <Paragraph style={{ textAlign: 'center', color: '#fff' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                </Paragraph>
                <Button mode="contained" style={{marginTop: 15, backgroundColor: '#0e81ea'}} onPress={() => console.log('Pressed')}>
                    <Icon name="people-sharp" color='#fff' size={18} /> Login/ Signin
                </Button>
            </Card.Content>
        </Card>
    )
}

const styles = StyleSheet.create({
    welcomeCard: {
        backgroundColor: "#182465",
        borderRadius: 0,
    }
})