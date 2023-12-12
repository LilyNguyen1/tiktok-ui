import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

import Image from '~/components/Images/Image';
import images from '~/assets/images';
import styles from './AccountPreview.module.scss';
import Button from '~/components/Button/Button';

const cx = classNames.bind(styles);

function AccountPreview() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <Image className={cx('avatar')} src={images.avatar} alt="Koala" />
        <Button primary className={cx('follow-btn')}>
          Theo dõi
        </Button>
      </div>

      <div className={cx('body')}>
        <div className={cx('item-info')}>
          <p className={cx('nickname')}>
            <strong>cutekoala</strong>
            <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
          </p>
          <p className={cx('name')}>Cute Koala</p>
          <p className={cx('analysis')}>
            <strong className={cx('value')}>8.2M</strong>
            <span className={cx('label')}>Followers</span>
            <strong className={cx('value')}>9M</strong>
            <span className={cx('label')}>Likes</span>
          </p>
        </div>
      </div>


    </div>
  );
}

export default AccountPreview;
