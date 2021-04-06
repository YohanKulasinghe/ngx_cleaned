import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Daily Collection',
    icon: 'home-outline',
    link: '/pages/dailycollection',
    home: true,
  },
  {
    title: 'Tappers',
    icon: 'person-outline',
    link: '/pages/tappers',
  },
  {
    title: 'Field Summary',
    icon: 'car-outline',
    link: '/pages/production',
  },
  {
    title: 'Overview',
    icon: 'eye-outline',
    link: '/pages/overview',
  },
  {
    title: 'OTHER',
    group: true,
  },
  {
  title: 'Sandry Workers',
  icon: 'person-outline',
  link: '/pages/exp',
  },
  {
    title: 'Sandry Works',
    icon: 'scissors-outline',
    link: '/pages/exp',
  },
  {
    title: 'MORE',
    group: true,
  },
  {
    title: 'Test Tapping',
    icon: 'calendar-outline',
    link: '/pages/exp',
  },
];
