import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "../pages/LoginPage";
import MainPage from "../pages/MainPage";

import "./app.css";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/" element={<MainPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
