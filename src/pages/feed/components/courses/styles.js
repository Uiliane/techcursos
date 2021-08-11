import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  imageThumbnail: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingRight: 20,
    paddingLeft: 10,
    margin: 10,
    borderRadius: 10,
    shadowColor: 'black',
    elevation: 10,
  },
  titleCourse: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Styles;
