import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import Modal from "../Modal/Modal";
import "./phone-list.css";

const PhoneList: React.FC = () => {
    const { phones } = useTypedSelector((state) => state.phone);
    const { user } = useTypedSelector((state) => state.user);

    const { deletePhone } = useActions();

    const [addModalActive, setAddModalActive] = useState(true);

    const onDelete = useCallback((number: string) => {
        deletePhone(number);
    }, []);

    useEffect(() => {
        axios.put(`http://localhost:3000/users/${user.id}`, {
            email: user.email,
            password: user.password,
            phones: phones,
        });
    }, [phones]);

    return (
        <>
            <button
                className="phone__add-button"
                onClick={() => setAddModalActive(true)}
            >
                Добавить контакт
            </button>
            <div className="phone__list">
                <table className="phone__list-table">
                    <thead className="table__head">
                        <tr>
                            <th>Имя</th>
                            <th>Телефон</th>
                            <th>Действия</th>
                        </tr>
                    </thead>
                    <tbody className="table__body">
                        {phones.length > 0 &&
                            phones.map((phone) => {
                                return (
                                    <tr key={phone.number}>
                                        <td>{phone.name}</td>
                                        <td>{phone.number}</td>
                                        <td>
                                            <div className="phone__list-actions">
                                                <button
                                                    className="action action--delete"
                                                    onClick={() =>
                                                        onDelete(phone.number)
                                                    }
                                                >
                                                    Удалить
                                                </button>
                                                <button className="action action--change">
                                                    Изменить
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        {!phones.length && (
                            <tr>
                                <td>Список пуст</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <Modal active={addModalActive} setActive={setAddModalActive}>
                <h1>hello</h1>
            </Modal>
        </>
    );
};

export default PhoneList;
