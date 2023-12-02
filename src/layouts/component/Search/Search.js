import { useEffect, useState, useRef } from 'react';
import TippyHeadless from '@tippyjs/react/headless';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Wrapper as PopperWrapper } from '~/components/Popper/Popper';
import AccountItem from '~/components/AccountItem/AccountItem.js';
import { SearchIcon } from '~/components/Icons/Icons';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { useDebounce } from '~/routes/hooks/hooks';
import * as searchService from '~/services/searchService';

const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [inputFocus, setInputFocus] = useState(false);
  const [loading, setLoading] = useState(false);

  const debouncedValue = useDebounce(searchValue, 700);
  //1: ''
  //2: h
  //3: ho
  //4: hoa
  //xem kỹ lại logic B105 ~ 13p
  //mỗi lần user bấm thêm 1 chữ cái như vậy thì vẫn lọt hàm useDebounce
  //tuy nhiên vì có setTimeout delay 700ms, vậy nên chỉ tính lần đầu là chuỗi rỗng, lần 2 là 'hoa', chứ ko tính 'h' or 'ho'

  const inputRef = useRef('');

  useEffect(() => {
    if (!debouncedValue.trim()) {
      setSearchResult([]);
      return;
    }

    const fetchApi = async () => {
      setLoading(true); //before call API set it true

      const result = await searchService.search(debouncedValue);

      setSearchResult(result);
      setLoading(false);
    };

    fetchApi();
  }, [debouncedValue]);

  const handleClear = () => {
    setSearchValue('');
    setSearchResult([]);
    inputRef.current.focus();
  };

  const handleHideResults = () => {
    setInputFocus(false);
  };

  const handleChange = (e) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(' ')) {
      setSearchValue(searchValue); //nếu giá trị KHÔNG phải là khoảng trắng  thì mới thực hiện setSearchValue()
      //hoặc: searchValue.startsWith(' ') là nếu giá trị là khoảng trắng thì return ko làm gì hết, else mới thực hiên set lại state
    }
  };

  return (
    // Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context.
    <div>
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
            onChange={handleChange}
            onFocus={() => setInputFocus(true)}
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
    </div>
  );
}

export default Search;
