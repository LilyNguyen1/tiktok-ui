import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleXmark,
  faLaptop,
  faInbox,
  faMagnifyingGlass,
  faPlus,
  faPaperPlane,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import Button from '~/components/Button';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Header.module.scss';
import images from '~/assets/images';
import AccountItem from '~/components/AccountItem';

const cx = classNames.bind(styles);

function Header() {
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 0);
  }, []);

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        {/* Logo */}
        <div className={cx('logo')}>
          <img src={images.logo} alt="Tiktok" />
        </div>

        {/* Search */}
        <Tippy
          interactive={true}
          visible={searchResult.length > 0}
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
        >
          <div className={cx('search')}>
            <input type="text" placeholder="Tìm kiếm" spellCheck={false} />

            <button className={cx('clear')}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

            <button className={cx('search-btn')}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>

        {/* Actions */}
        <div className={cx('actions')}>
          {/* Upload */}
          <div className={cx('upload-container')}>
            <a href="./" className={cx('upload-link')}>
              <div className={cx('upload')}>
                <FontAwesomeIcon className={cx('upload-icon')} icon={faPlus} />
                <span className={cx('upload-text')}>Tải lên</span>
              </div>
            </a>
          </div>

          {/* Login & Register */}
          {/* <Button primary>Đăng nhập</Button> */}
          <Button primary>Log in</Button>


          {/* Download */}
          {/* <div className={cx('download')}>
            <FontAwesomeIcon icon={faLaptop} />
          </div> */}

          {/* Message */}
          {/* <div className={cx('message')}>
            <FontAwesomeIcon icon={faPaperPlane} />
          </div> */}

          {/* Inbox */}
          {/* <div className={cx('inbox')}>
            <FontAwesomeIcon icon={faInbox} />
          </div> */}

          {/* Profile */}
          {/* <div className={cx('profile')}>
            <a href="./" className={cx('profile-link')}>
              <div>
                <img className={cx('profile-img')} src={images.profile} alt="img-profile" />
              </div>
            </a>
          </div>  */}

        </div>
      </div>
    </header>
  );
}

export default Header;
