import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { changePhone } from "../../store/action-creators/phone";
import { IPhone } from "../../types/types";
import Modal from "../Modal/Modal";
import "./phone-list.css";

const PhoneList: React.FC = () => {
    const { phones } = useTypedSelector((state) => state.phone);
    const { user } = useTypedSelector((state) => state.user);

    const { deletePhone, addPhone, changePhone } = useActions();

    const [addModalActive, setAddModalActive] = useState(false);
    const [changedContact, setChangedContact] = useState<IPhone>({
        id: "",
        name: "",
        number: "",
    });
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");

    const onDelete = useCallback((id: string) => {
        deletePhone(id);
    }, []);

    const onAddOpened = (): void => {
        setChangedContact({ id: "", name: "", number: "" });
        setAddModalActive(true);
    };

    const onChangeOpened = useCallback((contact: IPhone) => {
        setAddModalActive(true);
        setChangedContact(contact);
        setName(contact.name);
        setNumber(contact.number);
    }, []);

    const onSaveContact = (): void => {
        if (name && number) {
            if (changedContact.id !== "") {
                changePhone({
                    id: changedContact.id,
                    name: name,
                    number: number,
                });
                setChangedContact({ id: "", name: "", number: "" });
                setAddModalActive(false);
            } else {
                addPhone({
                    id: `ph${(+new Date()).toString(16)}`,
                    name: name,
                    number: number,
                });
                setAddModalActive(false);
            }
        }
    };

    useEffect(() => {
        setName("");
        setNumber("");
    }, [addModalActive]);

    useEffect(() => {
        axios.put(`http://localhost:3000/users/${user.id}`, {
            email: user.email,
            password: user.password,
            phones: phones,
        });
    }, [phones]);

    return (
        <>
            <button className="phone__add-button" onClick={() => onAddOpened()}>
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
                                    <tr key={phone.id}>
                                        <td>{phone.name}</td>
                                        <td>{phone.number}</td>
                                        <td>
                                            <div className="phone__list-actions">
                                                <button
                                                    className="action action--delete"
                                                    onClick={() =>
                                                        onDelete(phone.id)
                                                    }
                                                >
                                                    Удалить
                                                </button>
                                                <button
                                                    className="action action--change"
                                                    onClick={() =>
                                                        onChangeOpened(phone)
                                                    }
                                                >
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
                <form className="add__form">
                    <input
                        type="text"
                        className="add__form-input"
                        placeholder="Имя.."
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="text"
                        className="add__form-input"
                        placeholder="Номер телефона.."
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                    />

                    <div className="add__form-actions">
                        <button
                            type="button"
                            className="actions__btn add"
                            onClick={() => onSaveContact()}
                        >
                            Сохранить
                        </button>
                        <button
                            type="button"
                            className="actions__btn cancel"
                            onClick={() => setAddModalActive(false)}
                        >
                            Отменить
                        </button>
                    </div>
                </form>
            </Modal>
        </>
    );
};

export default PhoneList;
