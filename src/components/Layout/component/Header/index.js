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
  faEllipsisVertical,
  faGlobe,
  faCircleQuestion,
  faKeyboard,
  faEarthAsia,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import Button from '~/components/Button';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Header.module.scss';
import images from '~/assets/images';
import AccountItem from '~/components/AccountItem';
import Menu from '~/components/Popper/Menu';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          type: 'language',
          code: 'eng',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vie',
          title: 'Việt Nam',
        },
        {
          type: 'language',
          code: 'chi',
          title: 'Chinese',
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Feedback and help',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Keyboard shortcuts',
  },
];

function Header() {
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 0);
  }, []);

  const handleMenuChange = (menuItem) => {
    console.log(menuItem)
  }

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

          {/* menu */}
          <Menu items={MENU_ITEMS} onChange={handleMenuChange}>
            <button className={cx('more-btn')}>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </button>
          </Menu>

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
