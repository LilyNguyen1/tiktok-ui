import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import styles from './SuggestedAccounts.module.scss';
import Image from '../Images/Image';
import images from '~/assets/images';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('account-item')}>
      <Image className={cx('avatar')} src={images.avatar} alt="Koala" />
      <div className={cx('item-info')}>
        <p className={cx('nickname')}>
          <strong>cutekoala</strong>
          <FontAwesomeIcon className={cx('check')} icon={faCircleCheck}/>
        </p>
        <p className={cx('name')}>Cute Koala</p>
      </div>
    </div>
  );
}

// AccountItem.propTypes = {
//   label: PropTypes.string.isRequired,
// };

export default AccountItem;
