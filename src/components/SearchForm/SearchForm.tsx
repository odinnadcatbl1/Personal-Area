import "./search-form.css";

const SearchForm: React.FC = () => {
    return (
        <div className="search__form-wrapper">
            <form className="search__form">
                <input
                    type="text"
                    className="search__form-input"
                    placeholder="Найти.."
                />
            </form>
        </div>
    );
};

export default SearchForm;
