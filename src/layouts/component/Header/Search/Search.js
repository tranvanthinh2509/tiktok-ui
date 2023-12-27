import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/component/Popper';
import AccountItem from '~/component/AccountIItem';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { SearchIcon } from '~/component/Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import style from './Search.module.scss';
import { useRef, useState } from 'react';
import { useEffect } from 'react';
import { useDebounce } from '../../hooks';
import * as searchService from '~/services/searchService';

const cx = classNames.bind(style);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [showLoading, setShowLoading] = useState(false);
    const debouncedValue = useDebounce(searchValue, 500);

    useEffect(() => {
        if (!debouncedValue.trim()) {
            setSearchResult([]);
            return;
        }
        setShowLoading(true);
        const fetchAPI = async () => {
            const result = await searchService.search(debouncedValue);

            setSearchResult(result);
            setShowLoading(false);
        };
        fetchAPI();
    }, [debouncedValue]);

    const inputRef = useRef();

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };
    const handleShowResult = () => {
        setShowResult(true);
    };
    const handleOnChange = (e) => {
        const searchInput = e.target.value;

        if (!searchInput.startsWith(' ')) {
            setSearchValue(searchInput);
        }
    };

    return (
        // Using a wrapper <div>  tag around the reference element solves this by creating a new parentNode context.
        <div>
            <HeadlessTippy
                interactive="true"
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div
                        className={cx('search-result')}
                        tabIndex="-1"
                        {...attrs}
                    >
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            {searchResult.map((result) => (
                                <AccountItem
                                    key={result.id}
                                    result={result}
                                ></AccountItem>
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={() => {
                    setShowResult(false);
                }}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder="Tìm kiếm"
                        spellCheck="true"
                        onChange={handleOnChange}
                        onFocus={handleShowResult}
                    ></input>
                    {showLoading && (
                        <FontAwesomeIcon
                            icon={faSpinner}
                            className={cx('loading')}
                        />
                    )}

                    {!!searchValue && !showLoading && (
                        <button
                            className={cx('close-btn')}
                            onClick={handleClear}
                        >
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}

                    <button className={cx('find-btn')}>
                        <SearchIcon />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
