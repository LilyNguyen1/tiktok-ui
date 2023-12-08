import PropTypes from 'prop-types';

function SidebarMenu({ children }) {
  return <nav>{children}</nav>;
}

SidebarMenu.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SidebarMenu;
