import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Styles from './styles';

const Courses = ({navigation, course, user}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('DetailsCourse', {
          course: course,
          name: course.item.title,
        });
      }}>
      <View style={Styles.container}>
        <Image
          style={Styles.imageThumbnail}
          source={{
            uri: course.item.thumbnail,
          }}
        />
        <Text style={Styles.titleCourse}>{course.item.title}</Text>
        <Icon name="chevron-right" color="black" size={15} />
      </View>
    </TouchableOpacity>
  );
};

export default Courses;
