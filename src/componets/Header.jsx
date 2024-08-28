import { NavLink, useMatch } from 'react-router-dom'
import { btn } from '../GeneralCmpTailwind';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { set } from '../redux/currentSearchSlice'
import axios from 'axios';
// ASSETS
import mainLogo from '/logo.png'
// STYLE
import '../style/Header.css'

function Header() {
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const logoClass = {
    width: '80px',
    display: 'inline-block'
  }

  const resetSearch = () => {
    dispatch(set({ list: [], current: null }));
    inputRef.current.value = ''
  }

  const home = Boolean(useMatch('/'))
  const film = Boolean(useMatch('/film'))
  const series = Boolean(useMatch('/series'))

  let whereSearch;
  whereSearch = home ? '' : whereSearch;
  whereSearch = film ? '/film' : whereSearch;
  whereSearch = series ? '/series' : whereSearch;

  const handleSearch = () => {
    axios.post(`/api/get${whereSearch}`, { query: inputRef.current.value })
      .then((res) => {
        console.log(set({ list: res.data, current: null }));

        dispatch(set({ list: res.data, current: null }));
      })
  }




  console.log(home, film, series);
  return (
    <header className='container mx-auto px-4 py-2'>
      <nav className="flex flex-wrap items-center text-white">
        <div className="flex-1 mb-3">
          <NavLink to="/" >
            <h1 className='text-5xl' onClick={resetSearch} ><img src={mainLogo} style={logoClass} alt="logo app" /> WatchFlick</h1>
          </NavLink>
        </div>


        <div className="flex-none mx-auto">
          <NavLink to='film' onClick={resetSearch} className={({ isActive }) => (isActive ? btn.azul : btn.outWhite)} >film</NavLink>
          <NavLink to='series' onClick={resetSearch} className={({ isActive }) => (isActive ? btn.azul : btn.outWhite)} >series</NavLink>
          <input type="text" ref={inputRef} className='ms-2 py-1 px-2 pb-2 border-2 rounded-l border-white  border-r-black bg-slate-950 text-white' placeholder='search' />
          <button className="rounded-r text-white pt-1 px-2 pb-2 border-2 border-white border-l-black hover:bg-white hover:text-zinc-900" onClick={handleSearch} > CERCA </button>
        </div>




      </nav>
    </header>
  )
}

export default Header
