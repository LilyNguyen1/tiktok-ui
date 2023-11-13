import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
  const classes = cx('menu-item', {
    separate: data.separate,
  })
  return (
    <Button className={classes} leftIcon={data.icon} to={data.to} onClick={onClick}>
      <span className={cx('menu-icon')}>{data.icon}</span>
      <span className={cx('menu-text')}>{data.title}</span>
    </Button>
  );
}

export default MenuItem;
// ở đây khi thêm leftIcon vào props thì không nhận được mặc dù đã thêm leftIcon ở Button,
//in this case after ask Bard mình thử cho vào children thì được
// vì truyền vào không được nên mình đã tách luôn icon thêm className để css
//và mình đã thêm className để css cho dễ hơn.
