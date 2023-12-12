import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import styles from './SuggestedAccounts.module.scss';
import Image from '../Images/Image';
import images from '~/assets/images';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper/Popper';
import AccountPreview from './AccountPreview/AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
  const renderPreview = (props) => {
    return (
      <div tabIndex="-1" {...props}>
        <PopperWrapper>
          <AccountPreview />
        </PopperWrapper>
      </div>
    );
  };

  return (
    <div>
      <Tippy
        // visible
        interactive
        delay={[700, 0]}
        offset={[0, 5]}
        placement="bottom"
        render={renderPreview}
      >
        <div className={cx('account-item')}>
          <Image className={cx('avatar')} src={images.avatar} alt="Koala" />
          <div className={cx('item-info')}>
            <p className={cx('nickname')}>
              <strong>cutekoala</strong>
              <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
            </p>
            <p className={cx('name')}>Cute Koala</p>
          </div>
        </div>
      </Tippy>
    </div>
  );
}

// AccountItem.propTypes = {
// };

export default AccountItem;
