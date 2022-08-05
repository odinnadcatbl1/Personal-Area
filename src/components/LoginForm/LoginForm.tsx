import "./login-form.css";

const LoginForm: React.FC = () => {
    return (
        <div className="login__form-wrapper">
            <form className="login__form">
                <div className="login__form-title">Страница входа</div>

                <div className="login__form-inputs">
                    <input
                        className="login__form-input"
                        type="email"
                        placeholder="Email"
                    />
                    <input
                        className="login__form-input"
                        type="password"
                        placeholder="Пароль"
                    />
                </div>

                <button className="login__form-button">Войти</button>
            </form>
        </div>
    );
};

export default LoginForm;
