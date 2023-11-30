import React from 'react';
import PropTypes from 'prop-types';

import './GlobalStyles.scss';

function GlobalStyles({ children }) {
  return React.Children.only(children)
  //chỉ chấp nhận 1 children duy nhất, nếu truyền thêm thì lỗi.
}

GlobalStyles.propTypes = {
  children: PropTypes.node.isRequired,
}

export default GlobalStyles;
