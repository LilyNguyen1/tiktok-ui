import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import AccountItem from './AccountItem.js';
import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);

function SuggestedAccounts({label}) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('label')}>{label}</div>
      <AccountItem />
      <AccountItem />
      <AccountItem />

      <p className={cx('see-all')}>See all</p>
    </div>
  );
}

SuggestedAccounts.propTypes = {
  label: PropTypes.string.isRequired,
};

export default SuggestedAccounts;
