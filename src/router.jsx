import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home';
// import PgPost from './pages/PgPost'
import App from './App';
import Contact from './pages/Contact';

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
        ]
    },

]);

export default router
