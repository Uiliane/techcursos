import React, {useState} from 'react';
import {ActivityIndicator, FlatList, TextInput, View} from 'react-native';
import Courses from '../courses';
import Styles from './styles';

const Search = ({navigation, user}) => {
  const [courses, setCourses] = useState([
    {
      title: 'Aprendendo Python',
      description: 'Descrição',
      favorite: [{user: 'uilianesilvateixeira@gmail.com', favorite: true}],
      ratings: [{user: 'uilianesilvateixeira@gmail.com', rating: 3}],
      comments: [],
      playlistID: 'PLyqOvdQmGdTSEPnO0DKgHlkXb8x3cyglD',
      thumbnail:
        'https://th.bing.com/th/id/OIP.K72YuGb7DH_Rzi2GrPXxcgHaFj?w=219&h=180&c=7&o=5&pid=1.7',
      init: {
        'uilianesilvateixeira@gmail.com': true,
      },
    },
    {
      title: 'Aprendendo Java',
      description: 'Descrição',
      favorite: [{user: 'uilianesilvateixeira@gmail.com', favorite: true}],
      ratings: [{user: 'uilianesilvateixeira@gmail.com', rating: 3}],
      comments: [],
      playlistID: 'PLyqOvdQmGdTSEPnO0DKgHlkXb8x3cyglD',
      thumbnail:
        'https://cdn.vox-cdn.com/thumbor/_AobZZDt_RVStktVR7mUZpBkovc=/0x0:640x427/1200x800/filters:focal(0x0:640x427)/cdn.vox-cdn.com/assets/1087137/java_logo_640.jpg',
      init: {
        'uilianesilvateixeira@gmail.com': true,
      },
    },
    {
      title: 'Aprendendo Python',
      description: 'Descrição',
      favorite: [{user: 'uilianesilvateixeira@gmail.com', favorite: true}],
      ratings: [{user: 'uilianesilvateixeira@gmail.com', rating: 3}],
      comments: [],
      playlistID: 'PLyqOvdQmGdTSEPnO0DKgHlkXb8x3cyglD',
      thumbnail:
        'https://th.bing.com/th/id/OIP.K72YuGb7DH_Rzi2GrPXxcgHaFj?w=219&h=180&c=7&o=5&pid=1.7',
      init: {
        'uilianesilvateixeira@gmail.com': true,
      },
    },
    {
      title: 'Aprendendo Java',
      description: 'Descrição',
      favorite: [{user: 'uilianesilvateixeira@gmail.com', favorite: true}],
      ratings: [{user: 'uilianesilvateixeira@gmail.com', rating: 3}],
      comments: [],
      playlistID: 'PLyqOvdQmGdTSEPnO0DKgHlkXb8x3cyglD',
      thumbnail:
        'https://cdn.vox-cdn.com/thumbor/_AobZZDt_RVStktVR7mUZpBkovc=/0x0:640x427/1200x800/filters:focal(0x0:640x427)/cdn.vox-cdn.com/assets/1087137/java_logo_640.jpg',
      init: {
        'uilianesilvateixeira@gmail.com': true,
      },
    },
    {
      title: 'Aprendendo Python',
      description: 'Descrição',
      favorite: [{user: 'uilianesilvateixeira@gmail.com', favorite: true}],
      ratings: [{user: 'uilianesilvateixeira@gmail.com', rating: 3}],
      comments: [],
      playlistID: 'PLyqOvdQmGdTSEPnO0DKgHlkXb8x3cyglD',
      thumbnail:
        'https://th.bing.com/th/id/OIP.K72YuGb7DH_Rzi2GrPXxcgHaFj?w=219&h=180&c=7&o=5&pid=1.7',
      init: {
        'uilianesilvateixeira@gmail.com': true,
      },
    },
    {
      title: 'Aprendendo Java',
      description: 'Descrição',
      favorite: [{user: 'uilianesilvateixeira@gmail.com', favorite: true}],
      ratings: [{user: 'uilianesilvateixeira@gmail.com', rating: 3}],
      comments: [],
      playlistID: 'PLyqOvdQmGdTSEPnO0DKgHlkXb8x3cyglD',
      thumbnail:
        'https://cdn.vox-cdn.com/thumbor/_AobZZDt_RVStktVR7mUZpBkovc=/0x0:640x427/1200x800/filters:focal(0x0:640x427)/cdn.vox-cdn.com/assets/1087137/java_logo_640.jpg',
      init: {
        'uilianesilvateixeira@gmail.com': true,
      },
    },
    {
      title: 'Aprendendo Python',
      description: 'Descrição',
      favorite: [{user: 'uilianesilvateixeira@gmail.com', favorite: true}],
      ratings: [{user: 'uilianesilvateixeira@gmail.com', rating: 3}],
      comments: [],
      playlistID: 'PLyqOvdQmGdTSEPnO0DKgHlkXb8x3cyglD',
      thumbnail:
        'https://th.bing.com/th/id/OIP.K72YuGb7DH_Rzi2GrPXxcgHaFj?w=219&h=180&c=7&o=5&pid=1.7',
      init: {
        'uilianesilvateixeira@gmail.com': true,
      },
    },
    {
      title: 'Aprendendo Java',
      description: 'Descrição',
      favorite: [{user: 'uilianesilvateixeira@gmail.com', favorite: true}],
      ratings: [{user: 'uilianesilvateixeira@gmail.com', rating: 3}],
      comments: [],
      playlistID: 'PLyqOvdQmGdTSEPnO0DKgHlkXb8x3cyglD',
      thumbnail:
        'https://cdn.vox-cdn.com/thumbor/_AobZZDt_RVStktVR7mUZpBkovc=/0x0:640x427/1200x800/filters:focal(0x0:640x427)/cdn.vox-cdn.com/assets/1087137/java_logo_640.jpg',
      init: {
        'uilianesilvateixeira@gmail.com': true,
      },
    },
    {
      title: 'Aprendendo Python',
      description: 'Descrição',
      favorite: [{user: 'uilianesilvateixeira@gmail.com', favorite: true}],
      ratings: [{user: 'uilianesilvateixeira@gmail.com', rating: 3}],
      comments: [],
      playlistID: 'PLyqOvdQmGdTSEPnO0DKgHlkXb8x3cyglD',
      thumbnail:
        'https://th.bing.com/th/id/OIP.K72YuGb7DH_Rzi2GrPXxcgHaFj?w=219&h=180&c=7&o=5&pid=1.7',
      init: {
        'uilianesilvateixeira@gmail.com': true,
      },
    },
    {
      title: 'Aprendendo Java',
      description: 'Descrição',
      favorite: [{user: 'uilianesilvateixeira@gmail.com', favorite: true}],
      ratings: [{user: 'uilianesilvateixeira@gmail.com', rating: 3}],
      comments: [],
      playlistID: 'PLyqOvdQmGdTSEPnO0DKgHlkXb8x3cyglD',
      thumbnail:
        'https://cdn.vox-cdn.com/thumbor/_AobZZDt_RVStktVR7mUZpBkovc=/0x0:640x427/1200x800/filters:focal(0x0:640x427)/cdn.vox-cdn.com/assets/1087137/java_logo_640.jpg',
      init: {
        'uilianesilvateixeira@gmail.com': true,
      },
    },
    {
      title: 'Aprendendo Python',
      description: 'Descrição',
      favorite: [{user: 'uilianesilvateixeira@gmail.com', favorite: true}],
      ratings: [{user: 'uilianesilvateixeira@gmail.com', rating: 3}],
      comments: [],
      playlistID: 'PLyqOvdQmGdTSEPnO0DKgHlkXb8x3cyglD',
      thumbnail:
        'https://th.bing.com/th/id/OIP.K72YuGb7DH_Rzi2GrPXxcgHaFj?w=219&h=180&c=7&o=5&pid=1.7',
      init: {
        'uilianesilvateixeira@gmail.com': true,
      },
    },
    {
      title: 'Aprendendo Java',
      description: 'Descrição',
      favorite: [{user: 'uilianesilvateixeira@gmail.com', favorite: true}],
      ratings: [{user: 'uilianesilvateixeira@gmail.com', rating: 3}],
      comments: [],
      playlistID: 'PLyqOvdQmGdTSEPnO0DKgHlkXb8x3cyglD',
      thumbnail:
        'https://cdn.vox-cdn.com/thumbor/_AobZZDt_RVStktVR7mUZpBkovc=/0x0:640x427/1200x800/filters:focal(0x0:640x427)/cdn.vox-cdn.com/assets/1087137/java_logo_640.jpg',
      init: {
        'uilianesilvateixeira@gmail.com': true,
      },
    },
    {
      title: 'Aprendendo Python',
      description: 'Descrição',
      favorite: [{user: 'uilianesilvateixeira@gmail.com', favorite: true}],
      ratings: [{user: 'uilianesilvateixeira@gmail.com', rating: 3}],
      comments: [],
      playlistID: 'PLyqOvdQmGdTSEPnO0DKgHlkXb8x3cyglD',
      thumbnail:
        'https://th.bing.com/th/id/OIP.K72YuGb7DH_Rzi2GrPXxcgHaFj?w=219&h=180&c=7&o=5&pid=1.7',
      init: {
        'uilianesilvateixeira@gmail.com': true,
      },
    },
    {
      title: 'Aprendendo Java',
      description: 'Descrição',
      favorite: [{user: 'uilianesilvateixeira@gmail.com', favorite: true}],
      ratings: [{user: 'uilianesilvateixeira@gmail.com', rating: 3}],
      comments: [],
      playlistID: 'PLyqOvdQmGdTSEPnO0DKgHlkXb8x3cyglD',
      thumbnail:
        'https://cdn.vox-cdn.com/thumbor/_AobZZDt_RVStktVR7mUZpBkovc=/0x0:640x427/1200x800/filters:focal(0x0:640x427)/cdn.vox-cdn.com/assets/1087137/java_logo_640.jpg',
      init: {
        'uilianesilvateixeira@gmail.com': true,
      },
    },
    {
      title: 'Aprendendo Python',
      description: 'Descrição',
      favorite: [{user: 'uilianesilvateixeira@gmail.com', favorite: true}],
      ratings: [{user: 'uilianesilvateixeira@gmail.com', rating: 3}],
      comments: [],
      playlistID: 'PLyqOvdQmGdTSEPnO0DKgHlkXb8x3cyglD',
      thumbnail:
        'https://th.bing.com/th/id/OIP.K72YuGb7DH_Rzi2GrPXxcgHaFj?w=219&h=180&c=7&o=5&pid=1.7',
      init: {
        'uilianesilvateixeira@gmail.com': true,
      },
    },
    {
      title: 'Aprendendo Java',
      description: 'Descrição',
      favorite: [{user: 'uilianesilvateixeira@gmail.com', favorite: true}],
      ratings: [{user: 'uilianesilvateixeira@gmail.com', rating: 3}],
      comments: [],
      playlistID: 'PLyqOvdQmGdTSEPnO0DKgHlkXb8x3cyglD',
      thumbnail:
        'https://cdn.vox-cdn.com/thumbor/_AobZZDt_RVStktVR7mUZpBkovc=/0x0:640x427/1200x800/filters:focal(0x0:640x427)/cdn.vox-cdn.com/assets/1087137/java_logo_640.jpg',
      init: {
        'uilianesilvateixeira@gmail.com': true,
      },
    },
  ]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [itens, setItens] = useState(6);
  const [data, setData] = useState(courses.slice(0, 6));

  const getData = () => {
    setLoading(true);
    setTimeout(() => {
      setData(courses.slice(0, itens + 6));
      setItens(itens + 6);
      setLoading(false);
    }, 3000);
  };

  return (
    <View style={{marginBottom: 120}}>
      <View style={Styles.viewSearch}>
        <TextInput
          style={Styles.input}
          onChangeText={value => {
            setSearch(value);
          }}
          value={search}
          placeholderTextColor="white"
          placeholder="Buscar curso..."
        />
      </View>
      <FlatList
        data={data}
        renderItem={item =>
          item.item.title.includes(search) ? (
            <Courses navigation={navigation} course={item} user={user} />
          ) : (
            <></>
          )
        }
        keyExtractor={(item, index) => index}
        onEndReached={getData}
        onEndReachedThreshold={0.1}
        ListFooterComponent={() =>
          loading && itens <= courses.length ? (
            <View style={{padding: 50}}>
              <ActivityIndicator size={25} color="#004d9d" />
            </View>
          ) : (
            <></>
          )
        }
      />
    </View>
  );
};

export default Search;