import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {GoogleSignin} from 'react-native-google-signin';
import Icon from 'react-native-vector-icons/FontAwesome';
import Logo from '../../../../images/logo.png';
import Styles from './styles';

const Header = ({navigation}) => {
  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      navigation.navigate('Login');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={Styles.viewSearch}>
      <Image style={Styles.logo} source={Logo} />
      <View style={Styles.buttonSearch}>
        <TouchableOpacity
          onPress={() => {
            signOut();
          }}>
          <Icon name="sign-out" color="white" size={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
