import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
  return (
    <Button className={cx('menu-item')} leftIcon={data.icon} to={data.to} onClick={onClick}>
      <span className={cx('menu-icon')}>{data.icon}</span>
      <span className={cx('menu-text')}>{data.title}</span>
    </Button>
  );
}

export default MenuItem;
// ở đây khi thêm leftIcon vào props thì không nhận được mặc dù đã thêm leftIcon ở Button,
//in this case after ask Bard mình thử cho vào children thì được
