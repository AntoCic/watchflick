import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import RowMovies from '../componets/RowMovies'
import SearchMovies from '../componets/SearchMovies'
import { set } from '../redux/moviesSlice'
import axios from 'axios';

// ASSETS

// STYLE

function Series() {
  const movies = useSelector((state) => state.movies.value);
  const currentSearch = useSelector((state) => state.currentSearch.value);
  const dispatch = useDispatch();


  useEffect(() => {
    axios.post('/api/get/series')
      .then((res) => {
        console.log(res.data);
        dispatch(set(res.data));
      })
  }, []);

  return (
    <div >
      <h1 className='text-4xl text-center'>Series</h1>
      {movies && movies.series && (
        <>
          {currentSearch && currentSearch.list && currentSearch.list.length > 0 ? (
            <SearchMovies movies={currentSearch.list} />
          ) : (
            movies.series.list.map((film, i) => (
              <div key={i}>
                <h3 className='container mx-auto px-4 text-2xl font-bold'>
                  {movies.series.genres.find((film) => film.id === movies.series.index[i]).name}
                </h3>
                <RowMovies movies={film} />
              </div>
            )))}
        </>
      )}
    </div>
  );
}

export default Series