import PropTypes from 'prop-types';

import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

const defaultFn = () => {};
// Ý tưởng là state chứa 1 array, trong array đó có object(s): dạng như là: [{__},{__},...{__}].
// Luật là: luôn dùng object cuối cùng để map ra UI.
// Ban đầu state có 1 object là {data: items} => items (level.1) sẽ được map ra UI.
// Trong các phần tử của items nếu users click vào phần tử cha phần tử có "children" thì tiến hành set state để thêm mảng children này vào state, => lúc này "children"(level 2) sẽ là object cuối cùng trong mảng và theo luật thì sẽ được render ra,
// nếu users tiếp tục chọn vào option mà nó có "children" (level 3) thì sẽ tiếp tục có mảng mới và setState => render mảng mới ra UI.
// Khi ấn back thì tiến hành xoá phần tử cuối cùng để render ra phần tử trước đó.

function Menu({ children, items = [], hideOnClick = false, onChange = defaultFn, ...passProps }) {
  const [menuLevel, setmenuLevel] = useState([{ data: items }]); //menuLevel là 1 []
  const current = menuLevel[menuLevel.length - 1];
  // current nghĩa là object hiện tại.
  // menuLevel[index] là lấy phần tử ở thứ tự index này.

  const renderItems = () => {
    return current.data.map((item, index) => {
      //items là 1 object thì khi ghi current.data cũng có nghĩa là items
      const isParents = !!item.children;
      //nghĩa là: item.children mà có thì children là 1 object thì sẽ !! convert thành true (boolean), sau đó mới có thể sử dụng if else

      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParents) {
              setmenuLevel((prev) => [...prev, item.children]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };

  return (
    <Tippy
      interactive
      delay={[0, 700]}
      offset={[12, 10]}
      placement="bottom-end"
      hideOnClick={hideOnClick}
      render={(attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx('menu-popper')}>
            {menuLevel.length > 1 && ( // nghĩa là khi ở level 1 thì [] menuLevel có 1 element là {items} thì Header sẽ ko hiện ra, sau khi bấm vào level 2 thì [] này có 2 e, đáp ứng điều kiện nên Header được render
              <Header
                title={current.title}
                onBack={() => {
                  setmenuLevel((prev) => prev.slice(0, prev.length - 1));
                }}
              />
            )}
            <div className={cx('menu-body')}>{renderItems()}</div>
          </PopperWrapper>
        </div>
      )}
      onHide={() => {
        setmenuLevel((prev) => prev.slice(0, 1));
      }}
    >
      {children}
    </Tippy>
  );
}

Menu.propTypes = {
  children: PropTypes.node.isRequired,
  items: PropTypes.array,
  hideOnClick: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Menu;
