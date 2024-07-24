import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home';
import PgPost from './pages/PgPost'
import App from './App';

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
                path: "post/:idPost",
                element: <PgPost />,
            },
        ]
    },

]);

export default router
