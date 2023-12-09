import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

import SidebarMenu from './Menu/SidebarMenu';
import SidebarMenuItem from './Menu/SidebarMenuItem';
import config from '~/config/config';
import SuggestedAccounts from '~/components/SuggestedAccounts/SuggestedAccounts.js';

import { 
  DiscoverIcon, 
  FollowIcon, 
  LiveIcon, 
  HomeIcon,
  ActiveHomeIcon, 
  ActiveFollowIcon,
  ActiveDiscoverIcon,
  ActiveLiveIcon,
} from '~/components/Icons/Icons';

const cx = classNames.bind(styles);


function Sidebar() {
  return (
    <aside className={cx('wrapper')}>
      <SidebarMenu>
        <SidebarMenuItem
          title="Dành cho bạn" 
          to={config.routes.home} 
          icon={<HomeIcon />}
          activeIcon={<ActiveHomeIcon />}
        />
        <SidebarMenuItem 
          title="Đang Follow" 
          to={config.routes.following} 
          icon={<FollowIcon />} 
          activeIcon={<ActiveFollowIcon />}

        />
        <SidebarMenuItem 
          title="Khám phá" 
          to={config.routes.discover} 
          icon={<DiscoverIcon />}
          activeIcon={<ActiveDiscoverIcon />}

        />
        <SidebarMenuItem 
          title="LIVE" 
          to={config.routes.live} 
          icon={<LiveIcon />} 
          activeIcon={<ActiveLiveIcon />}

        />
      
      </SidebarMenu>

      <SuggestedAccounts label='Suggested accounts' />
      <SuggestedAccounts label='Following accounts' />

    </aside>
  )
}

export default Sidebar;
