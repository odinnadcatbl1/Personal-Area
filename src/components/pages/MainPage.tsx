import { Navigate } from "react-router";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import SearchForm from "../SearchForm/SearchForm";
import PhoneList from "../PhoneList/PhoneList";
import Header from "../Header/Header";
import AddForm from "../AddForm/AddForm";

const MainPage: React.FC = () => {
    const { user } = useTypedSelector((state) => state.user);

    if (user.email) {
        return (
            <div className="container">
                <Header />
                <AddForm />
                <SearchForm />
                <PhoneList />
            </div>
        );
    }
    return <Navigate to="/login" />;
};

export default MainPage;
