import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  imageThumbnail: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  viewRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  viewRowIcons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    padding: 10,
    backgroundColor: 'white',
  },
  input: {
    backgroundColor: '#004d9d',
    width: '85%',
    borderRadius: 30,
    color: 'white',
    paddingLeft: 10,
  },
  buttonSend: {
    backgroundColor: '#004d9d',
    padding: 6,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  button: {
    backgroundColor: '#004d9d',
    padding: 6,
    width: '60%',
    height: 50,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    margin: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  description: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Styles;
