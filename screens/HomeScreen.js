import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
  Card,
  Searchbar
} from 'react-native-paper';
import CardCourse from '../components/HomeScreen/CardCourse';

import WelcomeCard from '../components/HomeScreen/WelcomeCard';

const HomeScreen = ({ navigation }) => {
  const course_click_handle = (props) => {
    console.log(props);
  }
  return (
    <ScrollView>
      <WelcomeCard/>
      <CardCourse course_click_handle={course_click_handle}/>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    marginLeft: 16,
    marginRight: 16,
  },
  avatar_img: {
    marginTop: 16,
    flex: 1,
    flexDirection: 'column'
  },
  welcome: {
    fontSize: 18,
    fontWeight: '500',
  },
  name: {
    fontSize: 20,

  },
})