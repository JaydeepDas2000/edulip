import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import {
  Card,
  Title,
  Paragraph
} from 'react-native-paper'

const AppliedScreen = ({navigation}) => {
    return(
      /*
      <View style={styles.container}>
        <Text>Applied Screen</Text>
        <Button
          title="Go to Applied Screen... again"
          onPress={() => navigation.push("Applied")}
        />
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate("Home")}
        />
        <Button
          title="Go back"
          onPress={() => navigation.goBack()}
        />
        <Button
          title="Go to first screen"
          onPress={() => navigation.popToTop()}
        />
      </View>
      */
      <Card>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Content>
          <Title>Card title</Title>
          <Paragraph>Card content</Paragraph>
        </Card.Content>
      </Card>

    );
  };

export default AppliedScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})