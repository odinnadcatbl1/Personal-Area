import { useTypedSelector } from "../../hooks/useTypedSelector";
import "./phone-list.css";

const PhoneList: React.FC = () => {
    const { phones } = useTypedSelector((state) => state.phone);

    return (
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
                    {phones.map((phone) => {
                        return (
                            <tr key={phone.number}>
                                <td>{phone.name}</td>
                                <td>{phone.number}</td>
                                <td>
                                    <div className="phone__list-actions">
                                        <button className="action action--delete">
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
                </tbody>
            </table>
        </div>
    );
};

export default PhoneList;
