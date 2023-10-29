import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img className={cx('avatar')} src={images.profile} alt="img" />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>Cutie Pie</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </h4>
        <span className={cx('username')}>cutie-pie</span>
      </div>
    </div>
  );
}

export default AccountItem;
