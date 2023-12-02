import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
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
import { UploadIcon, DownloadIcon, MessageIcon, InboxIcon } from '~/components/Icons/Icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';

import Button from '~/components/Button/Button.js';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu/Menu';
import Image from '~/components/Images/Image';
import Search from '../Search/Search';
import config from '~/config/config';

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
  const currentUser = true;

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
          <Link to={config.routes.home} className={cx('logo-link')}>
            <img src={images.logo} alt="Tiktok" />
          </Link>
        </div>

        {/* Search */}
        <Search />

        {/* Actions */}
        <div className={cx('actions')}>
          {/* Upload */}
          <div className={cx('upload-container')}>
            <a href={config.routes.upload} className={cx('upload-link')}>
              <div className={cx('upload')}>
                <UploadIcon className={cx('upload-icon')} />
                <span className={cx('upload-text')}>Tải lên</span>
              </div>
            </a>
          </div>

          {currentUser ? (
            <>
              {/* Download */}
              {/* <Tippy
                // visible
                interactive
                delay={[0, 700]}
                offset={[12, 10]}
                placement="bottom"
                render={(attrs) => (
                  <div className={cx('download')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                      <div className={cx('download-icon')}>
                        <LaptopIcon />
                      </div>
                      <p className={cx('download-text')}>Ứng dụng TikTok cho máy tính</p>
                      <Button primary large className={cx('download-button')}>
                        Tải về
                      </Button>
                    </PopperWrapper>
                  </div>
                )}
                // onHide={() => console.log('hide this')}
                //làm đến đây không biết logic nên ẩn popper
              >
                <div className={cx('action-btn')} >
                  <DownloadIcon />
                </div>
              </Tippy> */}

              {/* Download */}
              <Tippy delay={[0, 50]} content="Tải về" placement="bottom">
                <div className={cx('action-btn')}>
                  <DownloadIcon />
                </div>
              </Tippy>

              {/* Message */}
              <Tippy delay={[0, 50]} content="Tin nhắn" placement="bottom">
                <div className={cx('action-btn')}>
                  <MessageIcon />
                </div>
              </Tippy>

              {/* Inbox */}
              <Tippy delay={[0, 50]} content="Hộp thư" placement="bottom">
                <div className={cx('action-btn')}>
                  <InboxIcon />
                  <span className={cx('badge')}>12</span>
                </div>
              </Tippy>
            </>
          ) : (
            <>
              {/* Login & Register  */}
              {/* <Button text>Đăng nhập</Button> */}
              <Button primary to='./'>Đăng nhập</Button>

              {/* Download: tạm thời hack để đây, vì có currentUser thì vị trí nút download khác nhau, chưa biết làm. */}
              <Tippy delay={[0, 50]} content="Tải về" placement="bottom">
                <div className={cx('action-btn')}>
                  <DownloadIcon />
                </div>
              </Tippy>
            </>
          )}

          <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
            {currentUser ? (
              <div className={cx('avatar')}>
                <a href={config.routes.profile} className={cx('avatar-link')}>
                  <Image
                    className={cx('user-avatar')}
                    src={images.avatar}
                    alt="Koala"
                    // fallback=""
                  />
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
