import classes from './SearchInput.module.scss'
import {useRef} from "react";

const SearchInput = () => {
    const search = useRef<HTMLInputElement>(null);
    return (
        <div className={classes.search__container} onClick={() => {search.current?.focus()}}>
            <input type="text" ref={search} className={classes.search__input} placeholder='Поиск'/>
        </div>
    );
};

export default SearchInput;