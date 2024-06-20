import WorkWithUs from "./WorkWithUs";
import TermsCondition from "./TermsCondition";
import Login from "./Login"; 
import App from "./App";
import ErrorPage from "./ErrorPage" 
import Header from "./Header";
import SignUp from "./SignUp";
import About from "./About";
import Podcast from "./Podcast";
import PrivatePolicy from "./PrivatePolicy";
import Review from "./Review";

const routes =[ 
    // all linkable routes on the page added with an error 
      { 
        path: "/", 
        element: <App />,
        children: [  
            { 
                path: "/",
                element:<Header />,
                errorElement: <ErrorPage />
            },
            {   
                path: "/login", 
                element: <Login />, 
                errorElement: <ErrorPage /> 
            },  
            { 
                path: "/WorkWithUs", 
                element: <WorkWithUs />, 
                errorElement: <ErrorPage />
            }, 
            { 
                path: "/TermsCondition", 
                element: <TermsCondition />, 
                errorElement: <ErrorPage /> 
            }, 
            {
                path: "/SignUp",
                element:<SignUp />,
                errorElement: <ErrorPage />
            },
            {
                path: "/About",
                element:<About />,
                errorElement: <ErrorPage />
            },
            {
                path: "/Podcast",
                element:<Podcast />,
                errorElement: <ErrorPage />
            },
            {
                path: "/PrivatePolicy",
                element:<PrivatePolicy />,
                errorElement: <ErrorPage />
            },
            {
                path: "/Review",
                element:<Review />,
                errorElement: <ErrorPage />
            }
        ] 
      } 
]; 

export default routes; 

