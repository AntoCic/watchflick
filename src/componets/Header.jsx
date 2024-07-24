import { Link } from 'react-router-dom'
import mainLogo from '/logo.png'
// ASSETS

// STYLE
import '../style/Header.css'
function Header() {
  const logoClass = {
    width: '80px'
  }

  return (
    <header className='container mx-auto px-4 py-2'>
      <nav>
        <Link to={'/'} ><img src={mainLogo} style={logoClass} alt="logo app" /></Link>
      </nav>
    </header>
  )
}

export default Header
