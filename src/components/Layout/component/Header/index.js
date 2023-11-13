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
  faCircleQuestion,
  faKeyboard,
  faEarthAsia,
  faUser,
  faCoins,
  faGear,
  faSignOut,
  faMoon,
  faHouse,
  faLightbulb,
} from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
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
  const currentUser = true;

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 0);
  }, []);

  //Handle Logic
  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case 'language':
        //
        break;
      default:
    }
  };

  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: 'Xem hồ sơ',
      to: '/@hoaa',
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: 'Nhận xu',
      to: '/coin',
    },
    {
      icon: <FontAwesomeIcon icon={faHouse} />,
      title: 'Bộ công cụ dành cho doanh nghiệp',
      to: '/business',
    },
    {
      icon: <FontAwesomeIcon icon={faLightbulb} />,
      title: 'Trung tâm Nhà sáng tạo LIVE',
      to: '/idea',
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: 'Cài đặt',
      to: '/settings',
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faMoon} />,
      title: 'Chế độ tối',
      to: '/darktheme',
    },
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: 'Đăng xuất',
      to: '/logout',
      separate: true,
    },
  ];

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        {/* Logo */}
        <div className={cx('logo')}>
          <img src={images.logo} alt="Tiktok" />
        </div>

        {/* Search */}
        <HeadlessTippy
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
        </HeadlessTippy>

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

          {currentUser ? (
            <>
              {/* Download */}
              <div className={cx('download')}>
                <FontAwesomeIcon icon={faLaptop} />
              </div>

              {/* Message */}

              <Tippy delay={(0, 200)} content="Tin nhắn" placement="bottom">
                <div className={cx('message')}>
                  <FontAwesomeIcon icon={faPaperPlane} />
                </div>
              </Tippy>

              {/* Inbox */}
              <div className={cx('inbox')}>
                <FontAwesomeIcon icon={faInbox} />
              </div>
            </>
          ) : (
            <>
              {/* Login & Register  */}
              {/* <Button text>Đăng nhập</Button> */}
              <Button primary>Log in</Button>
            </>
          )}

          <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
            {currentUser ? (
              <div className={cx('avatar')}>
                <a href="./" className={cx('avatar-link')}>
                  <div>
                    <img className={cx('avatar-img')} src={images.avatar} alt="Koala" />
                  </div>
                </a>
              </div>
            ) : (
              <button className={cx('more-btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
        {/* actions ends */}
      </div>
      {/* inner ends */}
    </header>
  );
}

export default Header;
// setTimeout(() => {
//     debugger;
// }, 3000)
