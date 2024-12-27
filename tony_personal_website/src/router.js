import { createBrowserRouter } from "react-router";
import App from "./App";
import HomeRoute from "./routes/HomeRoute";
import ProjectsRoute from "./routes/HomeRoute";
import AboutRoute from "./routes/HomeRoute";
import ContactRoute from "./routes/HomeRoute";

export const router = createBrowserRouter([
    {path: "/", element: <App/>},
    {path: "/home", element: <HomeRoute/>},
    // {path: "/career", element: </>},
    {path: "/projects", element: <ProjectsRoute/>},
    {path: "/about", element: <AboutRoute/>},
    {path: "/contact", element: <ContactRoute/>},
])