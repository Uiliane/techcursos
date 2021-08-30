import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  Image,
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
  const [comment, setComment] = useState([]);
  const [favorite, setFavorite] = useState(false);
  const [favoriteIcon, setFavoriteIcon] = useState(false);
  const [rating, setRating] = useState(0);
  const [comentario, setComentario] = useState('');

  const apiUrlFavoritos = 'http://127.0.0.1:8089';

  const apiUrlAvaliacao = 'http://127.0.0.1:8090';

  const apiUrlCursosiniciados = 'http://127.0.0.1:8091';

  const apiUrlComentarios = 'http://127.0.0.1:8092';

  async function getData() {
    axios
      .get(apiUrlFavoritos + `/favoritos/${course.id}/'${user.user.email}'`)
      .then(response => {
        if (response.data.length > 0) {
          setFavorite(response.data[0]);
          setFavoriteIcon(true);
        }
      })
      .catch(error => {
        console.log('Erro get Favoritos', error);
      });

    axios
      .get(apiUrlAvaliacao + `/avaliacao/${course.id}/'${user.user.email}'`)
      .then(response => {
        if (response.data.length > 0) {
          setRating(response.data[0]);
        }
      })
      .catch(error => {
        console.log('Erro get Avaliação', error);
      });

    axios
      .get(apiUrlComentarios + `/comentarios/${course.id}`)
      .then(response => {
        if (response.data.length > 0) {
          setComment(response.data);
        }
      })
      .catch(error => {
        console.log('Erro get Favoritos', error);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <ScrollView
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
            axios
              .get(
                apiUrlCursosiniciados +
                  `/insert_cursosiniciados/${course.id}/${user.user.email}`,
              )
              .then(response => {
                navigation.navigate('PlayerCourse', {
                  name: course.title,
                  playlistID: course.playlistID,
                });
              })
              .catch(error => {
                console.log('Erro insert Curso iniciado', error);
              });
          }}>
          <Text style={Styles.buttonText}>INICIAR O CURSO</Text>
        </TouchableOpacity>
      </View>
      <Text style={Styles.description}>{course.description}</Text>
      <View style={Styles.viewRowIcons}>
        <TouchableOpacity
          onPress={() => {
            if (favorite === false) {
              axios
                .get(
                  apiUrlFavoritos +
                    `/insert_favoritos/${course.id}/${user.user.email}`,
                )
                .then(response => {
                  axios
                    .get(
                      apiUrlFavoritos +
                        `/favoritos/${course.id}/'${user.user.email}'`,
                    )
                    .then(response => {
                      if (response.data.length > 0) {
                        setFavorite(response.data[0]);
                        setFavoriteIcon(!favoriteIcon);
                      }
                    })
                    .catch(error => {
                      console.log('Erro get Favoritos', error);
                    });
                })
                .catch(error => {
                  console.log('Erro insert Favoritos', error);
                });
            } else {
              axios
                .get(apiUrlFavoritos + `/delete_favoritos/${favorite.id}`)
                .then(response => {
                  axios
                    .get(
                      apiUrlFavoritos +
                        `/favoritos/${course.id}/'${user.user.email}'`,
                    )
                    .then(response => {
                      setFavorite(response.data[0]);
                      setFavoriteIcon(!favoriteIcon);
                    })
                    .catch(error => {
                      console.log('Erro get Favoritos', error);
                    });
                })
                .catch(error => {
                  console.log('Erro delete Favoritos', error);
                });
            }
          }}>
          {favorite ? (
            <Icon name="heart" color="red" size={25} solid />
          ) : (
            <Icon name="heart" color="red" size={25} light />
          )}
        </TouchableOpacity>
        <Rating
          imageSize={25}
          startingValue={rating === 0 ? 0 : rating.avaliacao}
          onFinishRating={value => {
            if (rating === 0) {
              axios
                .get(
                  apiUrlAvaliacao +
                    `/insert_avaliacao/${course.id}/${user.user.email}/${value}`,
                )
                .then(response => {
                  if (response.data.length > 0) {
                    getData();
                    setRating(value);
                  }
                })
                .catch(error => {
                  console.log('Erro delete Favoritos', error);
                });
            } else {
              axios
                .get(
                  apiUrlAvaliacao + `/update_avaliacao/${rating.id}/${value}`,
                )
                .then(response => {
                  if (response.data.length > 0) {
                    getData();
                    setRating(value);
                  }
                })
                .catch(error => {
                  console.log('Erro delete Favoritos', error);
                });
            }
          }}
        />
      </View>
      <View style={Styles.viewRow}>
        <TextInput
          style={Styles.input}
          onChangeText={value => {
            setComentario(value);
          }}
          value={comentario}
          placeholderTextColor="white"
          placeholder="Escreva um comentário sobre o curso..."
        />
        <View style={Styles.buttonSend}>
          <TouchableOpacity
            onPress={() => {
              axios
                .get(
                  apiUrlComentarios +
                    `/insert_comentarios/${course.id}/${user.user.email}/${comentario}`,
                )
                .then(response => {
                  axios
                    .get(apiUrlComentarios + `/comentarios/${course.id}`)
                    .then(response => {
                      if (response.data.length > 0) {
                        setComment(response.data);
                      }
                      setComentario('');
                    })
                    .catch(error => {
                      console.log('Erro get Favoritos', error);
                    });
                })
                .catch(error => {
                  console.log('Erro delete Favoritos', error);
                });
            }}>
            <Icon name="paper-plane" color="white" size={20} />
          </TouchableOpacity>
        </View>
      </View>
      {comment.map((item, index) => (
        <View
          key={index}
          style={{
            padding: 15,
            backgroundColor: '#D3D3D3',
            marginTop: 15,
            borderRadius: 10,
          }}>
          <View
            style={{
              alignItems: 'flex-end',
            }}>
            {item.usuario === user.user.email ? (
              <TouchableOpacity
                onPress={() => {
                  axios
                    .get(apiUrlComentarios + `/delete_comentarios/${item.id}`)
                    .then(response => {
                      axios
                        .get(apiUrlComentarios + `/comentarios/${course.id}`)
                        .then(response => {
                          if (response.data.length > 0) {
                            setComment(response.data);
                          }
                          setComentario('');
                        })
                        .catch(error => {
                          console.log('Erro get Favoritos', error);
                        });
                    })
                    .catch(error => {
                      console.log('Erro delete Favoritos', error);
                    });
                }}>
                <Icon name="trash-alt" color="#004d9d" size={20} />
              </TouchableOpacity>
            ) : (
              <></>
            )}
          </View>
          <Text style={{fontWeight: 'bold'}}>{item.usuario}</Text>
          <Text>{item.comentario}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default DetailsCourse;
