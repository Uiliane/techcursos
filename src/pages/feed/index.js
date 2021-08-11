import React from 'react';
import {View} from 'react-native';
import {getUser} from '../login';
import Header from './components/header';
import Search from './components/search';

const Feed = ({navigation}) => {
  const user = getUser();
  return (
    <View style={{paddingBottom: 150}}>
      <Header navigation={navigation} />
      <Search navigation={navigation} user={user} />
    </View>
  );
};

export default Feed;
