
export default function SearchMovies({ movies }) {
  return (
    <div className='container mx-auto px-4 my-4 text-center'>
      <h3 className='container mx-auto px-4 text-2xl font-bold'>
        Risultati della ricerca
      </h3>
      {

        movies && movies.filter(movie => movie.img_main).map((movie) => (
          <div key={movie.id} className='border-2 border-slate-700 inline-block p-2 rounded my-3 w-full' >
            <img src={'https://image.tmdb.org/t/p/w342' + movie.img_main} className='inline-block' alt="" />
            <p className='text-2xl'> {movie.title} </p>
            {movie.title !== movie.original_title && <p className='text-start'>Titolo Originale: {movie.original_title}</p>}
            <p className='text-start'>Lingua: {movie.original_language}</p>
            {movie.release_date && <p className='text-start'>Data: {movie.release_date}</p>}
            <p className='text-start'>Trama: {movie.plot}</p>
          </div>
        ))
      }
    </div>
  )
}
