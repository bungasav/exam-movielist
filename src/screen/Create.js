import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {Input, Button, Overlay} from '@rneui/themed';
import DropDownPicker from 'react-native-dropdown-picker';
import {useMovie} from '../context/movie';

const CATEGORIES = [
  {
    id: 1,
    label: 'All',
    value: 'all',
  },

  {
    id: 3,
    label: 'Horror',
    value: 'Horror',
  },
  {
    id: 4,
    label: 'Fiction',
    value: 'Fiction',
  },
  {
    id: 5,
    label: 'Action',
    value: 'Action',
  },
  {
    id: 6,
    label: 'Animation',
    value: 'Animation',
  },
  {
    id: 7,
    label: 'Family',
    value: 'Family',
  },
  {
    id: 8,
    label: 'Children',
    value: 'Children',
  },
  {
    id: 9,
    label: 'Anime',
    value: 'Anime',
  },
  {
    id: 10,
    label: 'Drama',
    value: 'Drama',
  },
  {
    id: 11,
    label: 'Romance',
    value: 'Romance',
  },
];

const styles = StyleSheet.create({
  button: {
    margin: 10,
  },
  textPrimary: {
    marginVertical: 20,
    textAlign: 'center',
    fontSize: 20,
  },
  textSecondary: {
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 17,
  },
});

export const Create = ({navigation}) => {
  const [open, setOpen] = React.useState(false);
  const [categories, setCategories] = React.useState([]);
  const [name, setName] = React.useState('');
  const [urlImage, setUrlImage] = React.useState('');
  const [visible, setVisible] = React.useState(false);

  const {createMovie} = useMovie();

  const onCreateMovie = () => {
    createMovie({
      name: name,
      image: urlImage,
      categories: categories,
    });
    setVisible(true);
  };

  const toggleOverlay = () => {
    setVisible(!visible);
    setName('');
    setUrlImage('');
    setCategories([]);
    navigation.navigate('Home');
  };

  return (
    <>
      <View
        style={{
          flex: 1,
          marginTop: 15,
          marginBottom: 10,
          paddingHorizontal: 6,
        }}>
        <Input
          label="Nama Film"
          placeholder="AADC 2"
          onChangeText={value => setName(value)}
          value={name}
        />
        <Input
          label="Image Url"
          placeholder="url"
          onChangeText={value => setUrlImage(value)}
          value={urlImage}
        />
        <DropDownPicker
          open={open}
          multiple={true}
          value={categories}
          items={CATEGORIES}
          setOpen={setOpen}
          setValue={setCategories}
        />

        <View
          style={{
            flex: 1,
            marginTop: 40,
            marginBottom: 10,
            paddingHorizontal: 6,
          }}>
          <Button
            onPress={() => {
              onCreateMovie();
            }}
            radius="md">
            Create
          </Button>
        </View>
      </View>

      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <Text style={styles.textPrimary}>Sukses Membuat Film!</Text>
        <Button title="Kembali" onPress={toggleOverlay} />
      </Overlay>
    </>
  );
};

export default Create;
