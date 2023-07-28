/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";

const isAuthenticate = () => localStorage.getItem("TesteKey");

const PrivateRoute = ({ children }) => {
    const auth = isAuthenticate();
    return auth ? <>{children}</> : (<Navigate to="/login"/>)
}

    // return 
    // <Route
    //     {...rest}

    //     loader={ () => 
    //         isAuthenticate() ? 
    //         (<Component/>) : 
    //         (<Navigate to={"/login"}/>)
    //     }

    // />


export default PrivateRoute;