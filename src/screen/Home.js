/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import {Text, Card, Button, Icon, Chip, SearchBar} from '@rneui/themed';
import {useMovie} from '../context/movie';

export const Home = () => {
  const {movieList} = useMovie();
  const [search, setSearch] = React.useState('');
  const updateSearch = value => {
    setSearch(value);
  };

  return (
    <ScrollView>
      <View style={{flex: 1, marginBottom: 10}}>
        <SearchBar
          placeholder="Search Movie..."
          onChangeText={updateSearch}
          value={search}
          platform="android"
        />
        {movieList
          .filter(data => {
            if (search === '') {
              return true;
            } else if (data.name.toLowerCase().includes(search.toLowerCase())) {
              return true;
            } else {
              return false;
            }
          })
          .map((movie, index) => (
            <Card key={movie.id}>
              <Card.Image
                style={{padding: 0}}
                source={{
                  uri: movie.image,
                }}
              />
              <Card.Divider />
              <Card.Title>{movie.name}</Card.Title>
              <View
                style={{
                  marginTop: 10,
                  marginBottom: 10,
                  flexDirection: 'row',
                }}>
                {movie.categories?.map((category, index) => (
                  <Chip
                    key={index}
                    title={category}
                    type="outline"
                    containerStyle={{marginHorizontal: 4}}
                  />
                ))}
              </View>
            </Card>
          ))}
      </View>
    </ScrollView>
  );
};

export default Home;
