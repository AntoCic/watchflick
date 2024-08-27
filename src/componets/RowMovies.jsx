
import { useRef } from 'react';

export default function RowMovies({ movies }) {
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
        {movies && movies.map((movie) => (
          <div
            key={movie.id}
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