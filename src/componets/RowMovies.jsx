
import { useRef } from 'react';
import { Link } from 'react-router-dom';

export default function RowMovies({ movies, category, index }) {
  const containerRef = useRef(null);
  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -256, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 256, behavior: 'smooth' });
    }
  };
  return (
    <div className='mb-3 relative'>
      <button
        onClick={scrollLeft}
        className='absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-r'
      >
        &lt;
      </button>

      <div
        ref={containerRef}
        className='overflow-x-hidden whitespace-nowrap scroll-smooth'
      >
        {movies && movies.filter(movie => movie.img_main).map((movie) => (
          <Link to={`/${category}/${index}/${movie.id}`} key={movie.id}>
            <div
              className='border-2 border-slate-700 inline-block p-2 rounded my-3 w-60 mr-4'
            >
              <img
                src={'https://image.tmdb.org/t/p/w342' + movie.img_main}
                className='block mx-auto'
                alt=""
              />
              <p className='text-xl text-center overflow-hidden text-ellipsis whitespace-nowrap'>
                {movie.title}
              </p>

            </div>
          </Link>
        ))}
      </div>

      <button
        onClick={scrollRight}
        className='absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-l'
      >
        &gt;
      </button>
    </div>

  )
}
