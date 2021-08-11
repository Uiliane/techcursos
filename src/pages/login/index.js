import React from 'react';
import {Image, View} from 'react-native';
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';
import Logo from '../../images/logo.png';
import Styles from './styles';

var user = '';

const Login = ({navigation}) => {
  const _signIn = async () => {
    try {
      GoogleSignin.configure({
        webClientId:
          '759572427365-o64m73qiee4vbq15hubr3nnmehkuktt5.apps.googleusercontent.com',
        offlineAccess: false,
      });
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      user = userInfo;
      navigation.setParams({
        userInfo: userInfo,
      });
      navigation.navigate('FeedTabs');
    } catch (error) {
      console.log('erro', error);
    }
  };

  return (
    <View>
      <Image style={Styles.logo} source={Logo} />
      <View style={Styles.button}>
        <GoogleSigninButton
          style={{width: 280, height: 60}}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={_signIn}
        />
      </View>
    </View>
  );
};

export const getUser = () => {
  return user;
};

export default Login;
