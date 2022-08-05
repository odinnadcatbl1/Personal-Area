import axios from "axios";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import "./index.css";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

// axios
//     .post("http://localhost:3000/register", {
//         email: "Salavatik@maisl.ru",
//         password: "321dsa",
//     })
//     .then((res) => console.log(res));

// axios
//     .post("http://localhost:3000/login", {
//         email: "Salavatik@maisl.ru",
//         password: "321dsa",
//     })
//     .then((res) => console.log(res));

// axios.get("http://localhost:3000/users/1").then((res) => {
//     const user = res.data;
//     axios
//         .put("http://localhost:3000/users/1/", {
//             email: user.email,
//             password: "12345",
//             phones: user.phones,
//         })
//         .then((data) => console.log(data.data));
// });

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
