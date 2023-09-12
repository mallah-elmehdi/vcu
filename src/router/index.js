import { createBrowserRouter } from 'react-router-dom';
import { PAGES } from '../constants/pages';
import { Base, Landing, NotFound } from '../pages';

export default createBrowserRouter([
    {
        path: '',
        element: <Base />,
        children: [
            // -------------- PUBLIC PAGE
            {
                path: PAGES.landing.url,
                element: <Landing />,
                index: true,
            },
            // -------------- 404
            {
                path: PAGES.notFound.url,
                element: <NotFound />,
            },
        ],
        errorElement: <NotFound />,
    },
]);
