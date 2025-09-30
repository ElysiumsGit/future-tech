import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../page/Home/Home";
import News from "../page/News/News";
import Podcasts from "../page/Podcast/Podcasts";
import Resources from "../page/Resources/Resources";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <App/>,
            children: [
                {
                    path: "/",
                    element: <Home />
                },
                {
                    path: "/news",
                    element: <News />
                },
                {
                    path: "/podcasts",
                    element: <Podcasts />
                },
                {
                    path: "/resources",
                    element: <Resources />
                },
            ]
        },
    ]
)

export default router;