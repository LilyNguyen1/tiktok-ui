import { useEffect, useState, useRef } from 'react';
import TippyHeadless from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { SearchIcon } from '~/components/Icons';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [inputFocus, setInputFocus] = useState(true);
  const [loading, setLoading] = useState(false);

  const inputRef = useRef('');

  useEffect(() => {
    if (!searchValue.trim()) {
      setSearchResult([]);
      return;
    }

    setLoading(true); //before call API set it true

    fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
      .then((res) => res.json())
      .then((res) => {
        setSearchResult(res.data);
        setLoading(false); //after call API set it false
      })
      .catch(() => {
        setLoading(false);
      });
  }, [searchValue]);

  const handleClear = () => {
    setSearchValue('');
    inputRef.current.focus();
  };

  const handleHideResults = () => {
    setInputFocus(false);
  };

  return (
    <TippyHeadless
      interactive
      visible={inputFocus && searchResult.length > 0}
      render={(attrs) => (
        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <h4 className={cx('search-title')}>Tài khoản</h4>
            {searchResult.map((result) => (
              <AccountItem key={result.id} data={result} /> //data={result} nghĩa là truyền result vào accountitem
            ))}
          </PopperWrapper>
        </div>
      )}
      onClickOutside={handleHideResults}
    >
      <div className={cx('search')}>
        <input
          ref={inputRef}
          value={searchValue}
          type="text"
          placeholder="Tìm kiếm"
          spellCheck={false}
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={setInputFocus}
        />

        {!!searchValue && !loading && (
          <button className={cx('clear')} onClick={handleClear}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}
        {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

        <button className={cx('search-btn')}>
          <SearchIcon />
        </button>
      </div>
    </TippyHeadless>
  );
}

export default Search;
