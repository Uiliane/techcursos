import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 125,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 150,
  },
  button: {
    width: '80%',
    alignSelf: 'center',
    borderRadius: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 150,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
});

export default Styles;
