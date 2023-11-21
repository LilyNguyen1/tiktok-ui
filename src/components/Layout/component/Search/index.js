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

  const inputRef = useRef('');

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1, 2]);
    }, 0);
  }, []);

  const handleHideResults = () => {
    setInputFocus(false);
  };

  return (
    <TippyHeadless
      // visible
      interactive
      visible={inputFocus && searchResult.length > 0}
      render={(attrs) => (
        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <h4 className={cx('search-title')}>Tài khoản</h4>
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
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

        {!!searchValue && (
          <button
            className={cx('clear')}
            onClick={() => {
              setSearchValue('');
              inputRef.current.focus();
            }}
          >
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}
        {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}

        <button className={cx('search-btn')}>
          <SearchIcon />
        </button>
      </div>
    </TippyHeadless>
  );
}

export default Search;
