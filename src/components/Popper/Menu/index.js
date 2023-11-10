import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

const defaultFn = () => {};

function Menu({ children, items = [], onChange = defaultFn}) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1]; //chuưa hiểu chỗ này B100 ~20p

  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParents = !!item.children;

      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParents) {
              setHistory((prev) => [...prev, item.children]);
            } else {
                onChange(item)
            }
          }}
        />
      );
    });
  };

  return (
    <Tippy
    //   visible
      interactive
      delay={[0, 700]}
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx('menu-popper')}>
            {history.length > 1 && (
              <Header
                title="Language"
                onBack={() => {
                  setHistory((prev) => prev.slice(0, prev.length - 1));
                }}
              />
            )}
            {renderItems()}
          </PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;

// setTimeout(() => {
//     debugger;
// }, 3000)
