import "./phone-list.css";

const PhoneList: React.FC = () => {
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
                    <tr>
                        <td>Салават</td>
                        <td>+79372864311</td>
                        <td>
                            <div className="phone__list-actions">
                                <div className="action action--delete">
                                    Удалить
                                </div>
                                <div className="action action--change">
                                    Изменить
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default PhoneList;
