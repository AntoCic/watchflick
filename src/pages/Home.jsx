import { useSelector } from 'react-redux';
import RowMovies from '../componets/RowMovies'
// ASSETS

// STYLE
import '../style/Home.css'

function Home() {
  const movies = useSelector((state) => state.movies.value);


  return (
    <div >
      {movies && movies.film && (
        <>
          <h3 className='container mx-auto px-4 text-2xl font-bold'>Film più apprezzati</h3>
          <RowMovies movies={movies.film.popular} />
          <h3 className='container mx-auto px-4 text-2xl font-bold'>Serie più apprezzate</h3>
          <RowMovies movies={movies.series.popular} />
          <h3 className='container mx-auto px-4 text-2xl font-bold'>Film AZIONE</h3>
          <RowMovies movies={movies.film.action} />
          <h3 className='container mx-auto px-4 text-2xl font-bold'>Film COMMEDIA</h3>
          <RowMovies movies={movies.film.comedy} />
          <h3 className='container mx-auto px-4 text-2xl font-bold'>Serie AZIONE-AVVENTURA</h3>
          <RowMovies movies={movies.series.action} />
          <h3 className='container mx-auto px-4 text-2xl font-bold'>Film in arrivo</h3>
          <RowMovies movies={movies.film.upcoming} />
          <h3 className='container mx-auto px-4 text-2xl font-bold'>Serie in On The Air</h3>
          <RowMovies movies={movies.series.on_the_air} />
        </>
      )}
    </div>
  );
}

export default Home
