import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home';

import App from './App';
import Contact from './pages/Contact';
import Film from './pages/Film';
import Series from './pages/Series';
import MovieShow from './pages/MovieShow';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "contact",
                element: <Contact />,
            },
            {
                path: "film",
                element: <Film />,
            },
            {
                path: "series",
                element: <Series />,
            },
            {
                path: "/:category/:index/:movie_id",
                element: <MovieShow />,
            },
        ]
    },

]);

export default router
