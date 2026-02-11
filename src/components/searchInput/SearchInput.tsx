import classes from './SearchInput.module.scss';
import { type ChangeEvent, useRef } from 'react';

interface SearchInputProps {
    onSearchChange: (query: string) => void;
    placeholder?: string;
}

const SearchInput = ({ onSearchChange, placeholder = 'Поиск' }: SearchInputProps) => {
    const search = useRef<HTMLInputElement>(null);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        onSearchChange(e.target.value);
    };

    return (
        <div
            className={classes.search__container}
            onClick={() => {
                search.current?.focus();
            }}
        >
            <input
                type="text"
                ref={search}
                className={classes.search__input}
                placeholder={placeholder}
                onChange={handleInputChange}
            />
        </div>
    );
};

export default SearchInput;