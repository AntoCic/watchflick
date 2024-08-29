import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import RowMovies from '../componets/RowMovies'
import SearchMovies from '../componets/SearchMovies'
import { set } from '../redux/moviesSlice'
import axios from 'axios';

export default function Film() {
  const movies = useSelector((state) => state.movies.value);
  const currentSearch = useSelector((state) => state.currentSearch.value);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.post('/api/get/film')
      .then((res) => {
        dispatch(set(res.data));
      })
  }, []);

  return (
    <div >
      <h1 className='text-4xl text-center'>Film</h1>
      {movies && movies.film && (
        <>
          {currentSearch && currentSearch.length > 0 ? (
        <SearchMovies movies={currentSearch} category="search"/>
      ) : (
            movies.film.list.map((film, i) => (
            <div key={i}>
              <h3 className='container mx-auto px-4 text-2xl font-bold'>
                {movies.film.genres.find((film) => film.id === movies.film.index[i]).name}
              </h3>
              <RowMovies movies={film} category="film" index={i} />
            </div>
          )))}
        </>
      )}
    </div>
  );
}


