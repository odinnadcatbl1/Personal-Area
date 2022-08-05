import { Navigate } from "react-router";
import { useTypedSelector } from "../../hooks/useTypedSelector";

import LoginForm from "../LoginForm/LoginForm";

const LoginPage: React.FC = () => {
    const { user } = useTypedSelector((state) => state.user);

    if (user.email) {
        return <Navigate to="/" />;
    }
    return (
        <div className="container">
            <LoginForm />
        </div>
    );
};

export default LoginPage;
