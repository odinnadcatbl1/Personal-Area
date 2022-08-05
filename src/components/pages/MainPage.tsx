import { Navigate } from "react-router";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const MainPage: React.FC = () => {
    const { user } = useTypedSelector((state) => state.user);

    if (user.email) {
        return <h1>HELLO</h1>;
    }
    return <Navigate to="/login" />;
    //return <div>hello</div>;
};

export default MainPage;
