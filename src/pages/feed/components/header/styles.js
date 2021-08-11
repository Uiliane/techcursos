import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 40,
  },
  input: {
    color: 'white',
    width: '80%',
  },
  viewSearch: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    height: 60,
    marginBottom: 10,
  },
  buttonSearch: {
    backgroundColor: '#004d9d',
    width: 40,
    alignItems: 'center',
    borderRadius: 100,
    justifyContent: 'center',
  },
});

export default Styles;
