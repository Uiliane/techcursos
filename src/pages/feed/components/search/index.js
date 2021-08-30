import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, TextInput, View} from 'react-native';
import Courses from '../courses';
import Styles from './styles';

const Search = ({navigation, user}) => {
  const [search, setSearch] = useState(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

  const apiUrl = 'http://127.0.0.1:8088';

  function getData() {
    setLoading(true);
    axios
      .get(
        apiUrl +
          `/cursos/${search !== null ? 1 : page}/${
            search === null ? '%20' : search
          }`,
      )
      .then(response => {
        if (search !== null) {
          setData(response.data);
        } else {
          setData(data.concat(response.data));
        }
        setPage(page + 1);
        setLoading(false);
      })
      .catch(error => {
        console.log('Erro get Cursos', error);
        setLoading(false);
      });
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getData();
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={{marginBottom: 120}}>
      <View style={Styles.viewSearch}>
        <TextInput
          style={Styles.input}
          onChangeText={value => {
            setSearch(value);
            getData();
          }}
          value={search}
          placeholderTextColor="white"
          placeholder="Buscar curso..."
        />
      </View>
      <FlatList
        data={data}
        renderItem={item => (
          <Courses navigation={navigation} course={item} user={user} />
        )}
        keyExtractor={(item, index) => index}
        onEndReached={getData}
        onEndReachedThreshold={0.1}
        ListFooterComponent={() =>
          loading ? (
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
