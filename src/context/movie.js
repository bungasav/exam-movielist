import React from 'react';

const MovieContext = React.createContext();

const dataMovieDefault = {
  data: [
    {
      id: 1,
      name: 'Doctor Strange In The Multiverse Of Madness',
      image: 'https://i.ytimg.com/vi_webp/MaFlX_J5Pf4/movieposter_id.webp',
      categories: ['Fiction', 'Action'],
    },
    {
      id: 2,
      name: 'Fast & Furious 9',
      image: 'https://i.ytimg.com/vi_webp/8hvKWhcHPUs/movieposter_de.webp',
      categories: ['Thriller', 'Action'],
    },
    {
      id: 3,
      name: 'Minions',
      image: 'https://i.ytimg.com/vi_webp/EstgiH937PU/movieposter.webp',
      categories: ['Animation', 'Family', 'Comedy'],
    },
    {
      id: 4,
      name: 'Frozen II',
      image: 'https://i.ytimg.com/vi_webp/XK6-D3Wwu6s/movieposter.webp',
      categories: ['Children', 'Anime'],
    },
    {
      id: 5,
      name: 'Top Gun',
      image: 'https://i.ytimg.com/vi_webp/o9YGg_ZfvGM/movieposter.webp',
      categories: ['Drama', 'Romance', 'Action'],
    },
    {
      id: 6,
      name: 'The Lion King',
      image: 'https://i.ytimg.com/vi_webp/-YqbGmLJAZo/movieposter.webp',
      categories: ['Action', 'Drama'],
    },
    {
      id: 7,
      name: 'The Nun',
      image: 'https://i.ytimg.com/vi_webp/jHHWuCtCxmA/movieposter.webp',
      categories: ['Horor'],
    },
    {
      id: 8,
      name: 'Wonder Woman',
      image: 'https://i.ytimg.com/vi_webp/E0_rAikqMrM/movieposter.webp',
      categories: ['Fantasy', 'Action'],
    },
    {
      id: 9,
      name: 'Tom & Jerry',
      image: 'https://i.ytimg.com/vi_webp/a4bqj3XX_KQ/movieposter.webp',
      categories: ['Action', 'Family'],
    },
    {
      id: 10,
      name: 'Ada Apa dengan Cinta? 2',
      image:
        'https://akcdn.detik.net.id/community/media/visual/2016/04/21/690e559b-02f6-4eab-9f85-add871294859.jpg?w=700&q=90',
      categories: ['Drama', 'Romance'],
    },
    {
      id: 11,
      name: 'Keluarga Cemara',
      image:
        'https://media.suara.com/pictures/original/2022/04/15/29760-keluarga-cemara-2.jpg',
      categories: ['Drama', 'Children'],
    },
    {
      id: 12,
      name: 'KKN di Desa Penari',
      image:
        'https://upload.wikimedia.org/wikipedia/id/f/f9/Poster_KKN_di_Desa_Penari_%28versi_uncut%29.jpeg',
      categories: ['Horror'],
    },
  ],
};

function MovieProvider(props) {
  const [movieList, setDataMovieList] = React.useState(dataMovieDefault.data);

  const createMovie = movie => {
    setDataMovieList(prevMoview => [movie, ...prevMoview]);
  };

  return (
    <MovieContext.Provider
      value={{movieList: movieList, createMovie: createMovie}}
      {...props}
    />
  );
}

const useMovie = () => React.useContext(MovieContext);

export {MovieProvider, useMovie};
