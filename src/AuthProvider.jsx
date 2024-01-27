/* src/AuthProvider.jsx */
import PropTypes from "prop-types";
import AuthContext from "./AuthContext";
import { useAuth } from "./hooks/useAuth"; // Our Custom hook

export default function AuthProvider({ children }) {
    const { user, loading } = useAuth();

    if (loading) {
        return <div>Loading...</div>;
    }

    return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
