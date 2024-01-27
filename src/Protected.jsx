/* src/Protected.jsx */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import AuthContext from "./AuthContext";

import PropTypes from "prop-types";

function Protected({ children }) {
    const user = useContext(AuthContext);
    const location = useLocation();

    if (!user) {
        return <Navigate to="/" state={{ from: location }} replace />;
    }

    return children;
}

Protected.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Protected;
