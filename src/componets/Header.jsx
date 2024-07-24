import { Link } from 'react-router-dom'
import { btn } from '../GeneralCmpTailwind'
// ASSETS

// STYLE
import '../style/Header.css'
function Header() {

  return (
    <header className='container mx-auto px-4 py-2'>
      <nav>
        <Link to={'/'} className={btn.outAzul}>Logo</Link>
      </nav>
    </header>
  )
}

export default Header
