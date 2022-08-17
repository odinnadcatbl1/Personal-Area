import { Navigate } from "react-router";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import PhoneList from "../PhoneList/PhoneList";
import Header from "../Header/Header";

const MainPage: React.FC = () => {
    const { user } = useTypedSelector((state) => state.user);

    if (user.email) {
        return (
            <div className="container">
                <Header />
                <PhoneList />
            </div>
        );
    }
    return <Navigate to="/login" />;
};

export default MainPage;
