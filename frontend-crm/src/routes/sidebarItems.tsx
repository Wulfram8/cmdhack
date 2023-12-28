import { SidebarItemProps } from '@/layouts/MainLayout/Sidebar/SidebarItem';
import { Dashboard, ShoppingCartRounded } from '@mui/icons-material';

export const sidebarItems: SidebarItemProps[] = [
  {
    label: 'Дашборд',
    to: '/dashboard',
    icon: <Dashboard />,
  },
  { label: 'Заказы', to: '/orders', icon: <ShoppingCartRounded /> },
];
