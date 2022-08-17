import { SearchFormProps } from "../../types/types";
import "./search-form.css";

const SearchForm: React.FC<SearchFormProps> = ({ onChange, value }) => {
    return (
        <div className="search__form-wrapper">
            <form className="search__form">
                <input
                    type="text"
                    className="search__form-input"
                    placeholder="Найти.."
                    onChange={onChange}
                    value={value}
                />
            </form>
        </div>
    );
};

export default SearchForm;
