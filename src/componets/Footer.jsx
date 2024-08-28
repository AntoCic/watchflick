import { Link } from 'react-router-dom';
import reactLogo from '../assets/img/react.svg'
import reduxLogo from '../assets/img/redux.svg'
import tailwindLogo from '../assets/img/tailwind.svg'
import viteLogo from '/vite.svg'
// STYLE
import '../style/Footer.css'
function Footer() {

  return (
    <footer className="py-3">

      <div className="container mx-auto px-4 py-2">
        <div className="flex flex-wrap items-center text-white">
          <div className="flex-1 px-4">

            <p className="mb-0">
              <a className='inline-block' href="https://vitejs.dev" target="_blank">
                <img src={viteLogo} className="home-loghi" alt="Vite logo" />
              </a>
              <a className='inline-block' href="https://react.dev" target="_blank">
                <img src={reactLogo} className="home-loghi react" alt="React logo" />
              </a>
              <a className='inline-block' href="https://redux.js.org/tutorials/quick-start" target="_blank">
                <img src={reduxLogo} className="home-loghi redux" alt="React logo" />
              </a>
              <a className='inline-block' href="https://tailwindcss.com/docs/container" target="_blank">
                <img src={tailwindLogo} className="home-loghi tailwind" alt="React logo" />
              </a>
            </p>
            <p className="mb-0">Antonino Cicala &copy;2024.</p>
          </div>
          <div className="flex-none px-4">
            <Link to={`contact`} >
              <span className='underline cursor-pointer' >
                Contatti
              </span>
            </Link>
            <ul className="flex flex-row-reverse gap-2 mt-1">
              <li>
                <a href="https://github.com/AntoCic" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="25"
                    zoomAndPan="magnify" viewBox="0 0 30 30.000001" height="25" preserveAspectRatio="xMidYMid meet"
                    version="1.0">
                    <defs>
                      <clipPath id="27d19c62e6">
                        <path d="M 0.492188 0 L 29.515625 0 L 29.515625 29.027344 L 0.492188 29.027344 Z M 0.492188 0 "
                          clipRule="nonzero" />
                      </clipPath>
                    </defs>
                    <g clipPath="url(#27d19c62e6)">
                      <path fill="currentColor"
                        d="M 15.007812 2.414062 C 8.328125 2.414062 2.914062 7.832031 2.914062 14.511719 C 2.914062 21.191406 8.328125 26.605469 15.007812 26.605469 C 21.6875 26.605469 27.105469 21.191406 27.105469 14.511719 C 27.105469 7.832031 21.6875 2.414062 15.007812 2.414062 Z M 0.492188 14.511719 C 0.492188 6.496094 6.992188 -0.00390625 15.007812 -0.00390625 C 23.023438 -0.00390625 29.523438 6.496094 29.523438 14.511719 C 29.523438 22.527344 23.023438 29.027344 15.007812 29.027344 C 6.992188 29.027344 0.492188 22.527344 0.492188 14.511719 Z M 0.492188 14.511719 "
                        fillOpacity="1" fillRule="evenodd" />
                    </g>
                    <path fill="currentColor"
                      d="M 12.09375 27.496094 C 11.976562 27.347656 11.976562 26 12.09375 23.460938 C 10.84375 23.503906 10.050781 23.417969 9.71875 23.199219 C 9.226562 22.875 8.730469 21.871094 8.289062 21.160156 C 7.847656 20.453125 6.871094 20.339844 6.476562 20.183594 C 6.082031 20.023438 5.984375 19.378906 7.5625 19.867188 C 9.144531 20.355469 9.222656 21.683594 9.71875 21.996094 C 10.21875 22.304688 11.410156 22.167969 11.949219 21.921875 C 12.492188 21.671875 12.453125 20.746094 12.546875 20.378906 C 12.667969 20.035156 12.242188 19.960938 12.230469 19.957031 C 11.703125 19.957031 8.933594 19.355469 8.171875 16.671875 C 7.410156 13.988281 8.390625 12.234375 8.914062 11.480469 C 9.261719 10.976562 9.230469 9.90625 8.820312 8.265625 C 10.3125 8.074219 11.460938 8.542969 12.269531 9.671875 C 12.269531 9.679688 13.332031 9.042969 15.007812 9.042969 C 16.683594 9.042969 17.28125 9.5625 17.738281 9.671875 C 18.195312 9.785156 18.5625 7.699219 21.398438 8.265625 C 20.808594 9.429688 20.3125 10.882812 20.691406 11.480469 C 21.066406 12.078125 22.550781 13.976562 21.640625 16.671875 C 21.03125 18.46875 19.835938 19.5625 18.054688 19.957031 C 17.851562 20.023438 17.75 20.125 17.75 20.273438 C 17.75 20.488281 18.023438 20.515625 18.421875 21.535156 C 18.6875 22.214844 18.707031 24.15625 18.480469 27.359375 C 17.90625 27.507812 17.457031 27.605469 17.136719 27.65625 C 16.570312 27.746094 15.957031 27.796875 15.351562 27.8125 C 14.746094 27.832031 14.535156 27.832031 13.699219 27.753906 C 13.144531 27.703125 12.609375 27.617188 12.09375 27.496094 Z M 12.09375 27.496094 "
                      fillOpacity="1" fillRule="evenodd" />
                  </svg>
                </a>

              </li>
              <li>
                <a href="https://www.linkedin.com/in/antonino-cicala/" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24"
                    fill="currentColor" className="mercado-match" width="25" height="25" focusable="false">
                    <path
                      d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z">
                    </path>
                  </svg>
                </a>

              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>

  )
}
export default Footer
