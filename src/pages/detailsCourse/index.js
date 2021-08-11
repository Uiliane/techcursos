import React, {useEffect, useState} from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Rating} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {getUser} from '../login';
import Styles from './styles';

const DetailsCourse = ({navigation, route}) => {
  const user = getUser();
  const [course, setCourse] = useState(route.params.course.item);
  const [comment, setComment] = useState('');
  const [favorite, setFavorite] = useState(false);
  const [rating, setRating] = useState(0);
  const [sendComment, setSendComment] = useState(false);

  useEffect(() => {
    course.ratings.map(item => {
      if (item.user === user.user.email) {
        setRating(item.rating);
      }
    });
    course.favorite.map(item => {
      if (item.user === user.user.email) {
        setFavorite(item.favorite);
      }
    });
  }, []);

  return (
    <ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{
          padding: 15,
        }}>
        <Image
          style={Styles.imageThumbnail}
          source={{
            uri: course.thumbnail,
          }}
        />
        <View style={Styles.button}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('PlayerCourse', {
                name: course.title,
                playlistID: course.playlistID,
              });
            }}>
            <Text style={Styles.buttonText}>INICIAR O CURSO</Text>
          </TouchableOpacity>
        </View>
        <Text style={Styles.description}>{course.description}</Text>
        <View style={Styles.viewRowIcons}>
          <TouchableOpacity
            onPress={() => {
              setFavorite(!favorite);
            }}>
            {favorite ? (
              <Icon name="heart" color="red" size={25} solid />
            ) : (
              <Icon name="heart" color="red" size={25} light />
            )}
          </TouchableOpacity>
          <Rating
            imageSize={25}
            startingValue={rating}
            onFinishRating={rating => {
              setRating(rating);
            }}
          />
        </View>
        <View style={Styles.viewRow}>
          <TextInput
            style={Styles.input}
            onChangeText={value => {
              setComment(value);
            }}
            value={comment}
            placeholderTextColor="white"
            placeholder="Escreva um comentário sobre o curso..."
          />
          <View style={Styles.buttonSend}>
            <TouchableOpacity
              onPress={() => {
                setSendComment(true);
              }}>
              <Icon name="paper-plane" color="white" size={20} />
            </TouchableOpacity>
          </View>
        </View>
        {sendComment ? (
          <View
            style={{
              padding: 15,
              backgroundColor: '#D3D3D3',
              marginTop: 15,
              marginBottom: 15,
              borderRadius: 10,
            }}>
            <Text style={{fontWeight: 'bold'}}>{user.user.name}</Text>
            <Text>{comment}</Text>
          </View>
        ) : (
          <></>
        )}
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default DetailsCourse;
