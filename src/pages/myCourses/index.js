import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import Courses from '../../pages/feed/components/courses';
import Header from '../feed/components/header';
import {getUser} from '../login';

const MyCourses = ({navigation}) => {
  const user = getUser();
  const [data, setData] = useState([]);

  const apiUrl = 'http://127.0.0.1:8091';

  function getData() {
    axios
      .get(apiUrl + `/cursosiniciados/${user.user.email}`)
      .then(response => {
        setData(data.concat(response.data));
      })
      .catch(error => {
        console.log('Erro get Cursos', error);
      });
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getData();
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={{marginBottom: 90}}>
      <Header navigation={navigation} />
      <Text
        style={{
          alignSelf: 'center',
          fontWeight: 'bold',
          fontSize: 16,
        }}>
        Cursos iniciados:
      </Text>
      <FlatList
        data={data}
        renderItem={item => (
          <Courses navigation={navigation} course={item} user={user} />
        )}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
};

export default MyCourses;
