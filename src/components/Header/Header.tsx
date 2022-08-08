import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";

import "./header.css";

const Header: React.FC = () => {
    const { user } = useTypedSelector((state) => state.user);

    const { logoutUser } = useActions();

    return (
        <header className="header">
            <div className="header__info">Добро пожаловать, {user.email}</div>
            <div className="header__button-container">
                <button className="header__button" onClick={logoutUser}>
                    Выйти
                </button>
            </div>
        </header>
    );
};

export default Header;
