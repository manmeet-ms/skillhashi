/* src/Unprotected.jsx */
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "./AuthContext";

import PropTypes from "prop-types";

function Unprotected({ children }) {
    const user = useContext(AuthContext);

    if (user) {
        return <Navigate to="/" replace />;
    }

    return children;
}

Unprotected.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Unprotected;
