const { useContext } = require("react")
const { AuthContext } = require("../contexts/AuthProvider")

const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth;