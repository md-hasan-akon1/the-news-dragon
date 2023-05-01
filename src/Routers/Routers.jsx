
import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Category from "../pages/Home/Category/Category";
import NewsLayout from "../layout/NewsLayout";
import News from "../pages/news/News/News";
import LoginLayout from "../layout/loginLayout/LoginLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home/Home";
import PrivetRout from "../pages/Sheared/PrivetRout/PrivetRout";
import Terms from "../pages/Sheared/Terms";


const router = createBrowserRouter([
    {
        path: "/",
        element:<LoginLayout></LoginLayout>,
        children:[
            {
                path:'/',
                element:<Navigate to="category/0"></Navigate>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
          {
            path:'/register',
            element:<Register></Register>
          },
          {
            path:"/terms",
            element:<Terms></Terms>
          }
        ]

    },

    {
        path: "category",
        element: <Main></Main>,
        children: [

            {
                path: ":id",
                element: <Category></Category>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)

            },

        ]

    },
    {
        path: 'news',
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: ':id',
                element: <PrivetRout><News></News></PrivetRout>,
                loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)

            }
        ]
    }
])
export default router;