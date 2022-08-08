import { useActions } from "../../hooks/useActios";
import { useNavigate } from "react-router";
import "./login-form.css";
import { useState } from "react";

const LoginForm: React.FC = () => {
    const { loginUser } = useActions();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        loginUser({ email: email, password: password, phones: [] });
        navigate("/");
    };

    return (
        <div className="login__form-wrapper">
            <form onSubmit={onLogin} className="login__form">
                <div className="login__form-title">Страница входа</div>

                <div className="login__form-inputs">
                    <input
                        className="login__form-input"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                    <input
                        className="login__form-input"
                        type="password"
                        placeholder="Пароль"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                </div>

                <button type="submit" className="login__form-button">
                    Войти
                </button>
            </form>
        </div>
    );
};

export default LoginForm;
