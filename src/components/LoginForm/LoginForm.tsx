import "./login-form.css";

const LoginForm: React.FC = () => {
    return (
        <div className="login__form-wrapper">
            <form className="login__form">
                <div className="login__form-title">Страница входа</div>
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
            </form>
        </div>
    );
};

export default LoginForm;
