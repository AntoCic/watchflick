import { NavLink, useMatch, useNavigate } from 'react-router-dom'
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { set } from '../redux/currentSearchSlice'
import axios from 'axios';
// ASSETS
import mainLogo from '/logo.png'

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  // Stato per il placeholder
  const [inputPlaceholder, setInputPlaceholder] = useState('search');

  const logoClass = {
    width: '80px',
    display: 'inline-block'
  }

  const resetSearch = () => {
    dispatch(set([]));
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
    if (inputRef.current.value.trim() !== '') {
      axios.post(`/api/get${whereSearch}`, { query: inputRef.current.value })
        .then((res) => {
          dispatch(set(res.data));
          console.log(res.data);
          
          if (res.data, length === 0) {
            setInputPlaceholder('Nessun risultato trovato');
            inputRef.current.value = ''
          }
        })
    }
  }

  const handleClickSearchInpt = () => {
    setInputPlaceholder('search');
    navigate(whereSearch);
  }

  // STYLE
  const selected = 'p-2 text-red-700 underline'
  const anSelected = 'p-2'

  return (
    <header className='container mx-auto px-4 py-2'>
      <nav className="flex flex-wrap items-center text-white">
        <div className="flex-1 mb-3">
          <NavLink to="/" >
            <h1 className='text-5xl' onClick={resetSearch} ><img src={mainLogo} style={logoClass} alt="logo app" /> WatchFlick</h1>
          </NavLink>
        </div>

        <div className="flex-none mx-auto">
          {/* <NavLink to='/' onClick={resetSearch} className={({ isActive }) => (isActive ? selected + " align-middle" : anSelected+ " align-middle")} > */}
          <NavLink to='/' onClick={resetSearch} className={({ isActive }) => (isActive ? selected : anSelected)} >
            <span className="material-symbols-outlined align-sub">
              home
            </span>
          </NavLink>
          <NavLink to='film' onClick={resetSearch} className={({ isActive }) => (isActive ? selected : anSelected)} >film</NavLink>
          <NavLink to='series' onClick={resetSearch} className={({ isActive }) => (isActive ? selected : anSelected)} >series</NavLink>
          <input type="text" ref={inputRef} className={'ms-2 p-2 border-2 rounded-l border-white  clear-border-r bg-slate-950 text-white max-w-36'} placeholder={inputPlaceholder} onClick={handleClickSearchInpt} />
          <button className="rounded-r text-white p-2 border-2 border-white clear-border-l hover:bg-white hover:text-zinc-900" onClick={handleSearch} >
            <span className="material-symbols-outlined align-bottom">
              search
            </span>
          </button>
        </div>

      </nav>
    </header>
  )
}

export default Header
