import { Outlet } from 'react-router-dom'
import Header from './componets/Header'
import Footer from './componets/Footer'

import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { set } from './redux/moviesSlice'
import axios from 'axios';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("First API call");
    axios.get('/api/all')
      .then((res) => {
        console.log(res.data);
        dispatch(set(res.data));
      })
  }, []);

  return (
    <>
      <Header />
      <main>
        <Outlet></Outlet>
      </main>
      <Footer />
    </>
  )
}

export default App
