import { Outlet } from 'react-router-dom'
import Header from './componets/Header'
import Footer from './componets/Footer'

import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { set } from './redux/postSlice'


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("First API call");
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then((res) => {
        dispatch(set(res));
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
