import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import RowMovies from '../componets/RowMovies'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { set } from '../redux/currentSearchSlice'
import { useEffect } from 'react';

export default function MovieShow() {
  const dispatch = useDispatch();
  const { category, index, movie_id } = useParams();

  const movies = useSelector((state) => state.movies.value);
  const currentSearch = useSelector((state) => state.currentSearch.value);
  let movie = null;
  if (category === 'film' || category === 'series') {
    if (movies && movies[category] && movies[category].list) {
      movie = movies[category].list[index].find((e) => e.id == movie_id)
    }
  } else {
    movie = currentSearch.find((e) => e.id == movie_id)
  }
  useEffect(() => {
    if (category === 'film' || category === 'series') {
      if (movie && movie.genre_ids.length > 0) {
        const genre = movie.genre_ids.slice(0, 3).join(',');
        axios.post(`/api/get`, { genre })
          .then((res) => {
            dispatch(set(res.data));
          })
      }
    }
  }, [movie]);

  return (
    <>
      {movie && (
        <div key={movie.id} className="container mx-auto px-4">
          <img
            src={`https://image.tmdb.org/t/p/w342${movie.img_poster || movie.img_main}`}
            className="inline-block w-full"
            alt={`Poster of ${movie.title}`}
          />
          <p className="text-2xl">{movie.title}</p>
          {movie.title !== movie.original_title && (
            <p className="text-start">Titolo Originale: {movie.original_title}</p>
          )}
          <div className="flex mt-2">
            {Array(Math.round(movie.vote_average / 2)).fill().map((_, index) => (
              <span key={index} className="material-symbols-outlined g-icon-fill text-yellow-300">
                star
              </span>
            ))}
          </div>
          <div className="flex mt-2">
            {movie.genre_ids.map((genre_id, i) => (
              <span key={genre_id}>{movies[movie.movieType].genres.find((e) => e.id == genre_id).name}{i + 1 < movie.genre_ids.length && ","}&nbsp;</span>
            ))}
          </div>
          <p className="text-start">Lingua: {movie.original_language}</p>
          {movie.release_date ? (
            <p className="text-start">Data: {new Date(movie.release_date).toLocaleDateString()}</p>
          ) : (
            <p className="text-start">Data: Non disponibile</p>
          )}
          <p className="text-start">Trama: {movie.plot || 'Trama non disponibile'}</p>
          <div className='mt-3'>
            <RowMovies movies={currentSearch} category={'serch'} index="_" />
          </div>
        </div>
      )}
    </>
  );
}