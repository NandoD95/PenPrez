import WorkWithUs from "./WorkWithUs";
import TermsCondition from "./TermsCondition";
import Login from "./Login"; 
import App from "./App";
import ErrorPage from "./ErrorPage" 

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
            } 
        ] 
      } 
]; 

export default routes; 

