import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleXmark,
  faInbox,
  faLaptop,
  faMagnifyingGlass,
  faPaperPlane,
  faPlus,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        {/* Logo */}
        <div className={cx('logo')}>
          <img src={images.logo} alt="Tiktok" />
        </div>

        {/* Search */}
        <div className={cx('search')}>
          <input type="text" placeholder="Search accounts and videos" spellCheck={false} />
          <button className={cx('clear')}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
          <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

          <button className={cx('search-btn')}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>

        {/* Actions */}
        <div className={cx('actions')}>
          <div className={cx('upload')}>
            <FontAwesomeIcon icon={faPlus} />
            <p>
              Tải lên
            </p>
          </div>
          <FontAwesomeIcon icon={faLaptop} />
          <FontAwesomeIcon icon={faPaperPlane} />
          <FontAwesomeIcon icon={faInbox} />
          <div className={cx('profile')}></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
