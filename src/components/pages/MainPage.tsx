import { Navigate } from "react-router";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import SearchForm from "../SearchForm/SearchForm";
import PhoneList from "../PhoneList/PhoneList";

const MainPage: React.FC = () => {
    const { user } = useTypedSelector((state) => state.user);

    console.log(user);

    if (user.email) {
        return (
            <div className="container">
                <SearchForm />
                <PhoneList />
            </div>
        );
    }
    return <Navigate to="/login" />;
};

export default MainPage;