import { Link } from 'react-router-dom'
import mainLogo from '/logo.png'
// ASSETS
import reactLogo from '../assets/img/react.svg'
import reduxLogo from '../assets/img/redux.svg'
import tailwindLogo from '../assets/img/tailwind.svg'
import viteLogo from '/vite.svg'
// STYLE
import '../style/Header.css'
function Header() {
  const logoClass = {
    width: '80px',
    display: 'inline-block'
  }

  return (
    <header className='container mx-auto px-4 py-2'>
      <nav>
        <Link to={'/'} >
          <h1 className='text-5xl text-center'><img src={mainLogo} style={logoClass} alt="logo app" /> WatchFlick</h1>
        </Link>
        <p className='text-center'>
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
      </nav>
    </header>
  )
}

export default Header
